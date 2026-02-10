import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ServicesCarousel from "./services/ServicesCarousel";
import ServicesForm from "./services/ServicesForm";
import ServicesSummary from "./services/ServicesSummary";
import ServicesSuccessModal from "./services/ServicesSuccessModal";
import {
  PROJECT_TYPES,
  STACK_OPTIONS,
  FUNCTION_OPTIONS,
  DELIVERABLES,
  SERVICE_CARDS,
  CURRENCY,
} from "./services/constants";

const formatMoney = (value) => new Intl.NumberFormat("es-CO").format(value);

const Services = () => {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].id);
  const [projectTypeOther, setProjectTypeOther] = useState("");
  const [extraSections, setExtraSections] = useState(0);
  const [stackChoice, setStackChoice] = useState(STACK_OPTIONS[0].id);
  const [stackOther, setStackOther] = useState("");
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [functionSelect, setFunctionSelect] = useState("");
  const [customFunctionInput, setCustomFunctionInput] = useState("");
  const [customFunctions, setCustomFunctions] = useState([]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const selectedType = PROJECT_TYPES.find((type) => type.id === projectType) || PROJECT_TYPES[0];
  const selectedStack = STACK_OPTIONS.find((item) => item.id === stackChoice) || STACK_OPTIONS[0];
  const selectedFunctionItems = FUNCTION_OPTIONS.filter((item) => selectedFunctions.includes(item.id));
  const includedSections = selectedType.includedPages ?? 0;
  const totalSections = includedSections + extraSections;

  const estimate = useMemo(() => {
    const pagesCost = extraSections * selectedType.perPage;
    const functionsCost = selectedFunctions.reduce((acc, id) => {
      const item = FUNCTION_OPTIONS.find((option) => option.id === id);
      return acc + (item ? item.cost : 0);
    }, 0);
    const stackCost = stackChoice === "other" ? 0 : selectedStack.cost;

    const base = selectedType.base + pagesCost + functionsCost + stackCost;
    const min = Math.round(base * 0.9);
    const max = Math.round(base * 1.15);

    return { min, max };
  }, [extraSections, selectedFunctions, selectedStack.cost, selectedType, stackChoice]);

  const stackLabel = stackChoice === "other"
    ? stackOther.trim() || "Otro"
    : selectedStack.label;
  const functionLabels = [
    ...selectedFunctionItems.map((item) => item.label),
    ...customFunctions,
  ];
  const functionsLabelText = functionLabels.length ? functionLabels.join(", ") : "Sin funciones";
  const projectTypeLabel = projectType === "other"
    ? `Otro: ${projectTypeOther.trim() || "Proyecto personalizado"}`
    : selectedType.label;
  const estimateRange = `${CURRENCY} ${formatMoney(estimate.min)} - ${formatMoney(estimate.max)}`;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isProjectTypeOtherValid = projectType !== "other" || projectTypeOther.trim().length > 2;
  const isStackOtherValid = stackChoice !== "other" || stackOther.trim().length > 2;
  const hasFunctions = functionLabels.length > 0;
  const isFormComplete = isEmailValid && isProjectTypeOtherValid && isStackOtherValid && hasFunctions;
  const missingItems = [
    !isEmailValid && "Correo valido",
    !hasFunctions && "Funciones clave",
    !isStackOtherValid && "Stack personalizado",
    !isProjectTypeOtherValid && "Tipo de proyecto personalizado",
  ].filter(Boolean);

  const handleFunctionSelect = (event) => {
    const value = event.target.value;
    if (!value) return;
    if (!selectedFunctions.includes(value)) {
      setSelectedFunctions((prev) => [...prev, value]);
    }
    setFunctionSelect("");
  };

  const addCustomFunction = () => {
    const value = customFunctionInput.trim();
    if (!value) return;
    if (!customFunctions.includes(value)) {
      setCustomFunctions((prev) => [...prev, value]);
    }
    setCustomFunctionInput("");
  };

  const removeFunction = (id) => {
    setSelectedFunctions((prev) => prev.filter((item) => item !== id));
  };

  const removeCustomFunction = (label) => {
    setCustomFunctions((prev) => prev.filter((item) => item !== label));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!isFormComplete) {
      setErrorMessage("Completa todos los campos para enviar la cotizacion.");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage("Falta configurar EmailJS. Revisa las variables VITE_EMAILJS_*.");
      return;
    }

    setStatus("sending");

    try {
      const message = [
        `Tipo: ${projectTypeLabel}`,
        `Secciones: ${totalSections} (${includedSections} incluidas + ${extraSections} adicionales)`,
        `Stack: ${stackLabel}`,
        `Funciones: ${functionsLabelText}`,
        `Rango estimado: ${estimateRange}`,
      ].join("\n");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: email.trim(),
          email: email.trim(),
          name: "Cotizador Lian",
          from_name: "Cotizador Lian",
          title: "Cotizacion estimada",
          message,
          project_type: projectTypeLabel,
          project_detail: projectType === "other" ? projectTypeOther.trim() : "",
          sections: totalSections,
          included_sections: includedSections,
          extra_sections: extraSections,
          stack: stackLabel,
          stack_detail: stackChoice === "other" ? stackOther.trim() : "",
          functions: functionsLabelText,
          estimate_range: estimateRange,
          deliverables: DELIVERABLES.join(", "),
          reply_to: email.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setShowSuccess(true);
    } catch (error) {
      setStatus("error");
      const detail = error?.text || error?.message || "Intenta de nuevo.";
      setErrorMessage(`No se pudo enviar la cotizacion. ${detail}`);
    }
  };

  const resetEstimator = () => {
    setProjectType(PROJECT_TYPES[0].id);
    setProjectTypeOther("");
    setExtraSections(0);
    setStackChoice(STACK_OPTIONS[0].id);
    setStackOther("");
    setSelectedFunctions([]);
    setFunctionSelect("");
    setCustomFunctionInput("");
    setCustomFunctions([]);
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
    setShowSuccess(false);
  };

  const isSubmitDisabled = !isFormComplete || status === "sending";

  return (
    <section id="servicios" className="py-8 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange">
            Servicios
          </h2>
          <div className="w-24 h-1 mx-auto bg-orange" />
          <p className="text-md md:text-lg mt-4 text-white/80 max-w-2xl mx-auto">
            Soluciones digitales pensadas para crecer contigo. Definimos el alcance y la solucion ideal para tu proyecto.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
            <span className="rounded-full border border-orange/40 px-4 py-2">Stack moderno</span>
            <span className="rounded-full border border-orange/40 px-4 py-2">Entrega clara</span>
            <span className="rounded-full border border-orange/40 px-4 py-2">Feedback continuo</span>
          </div>
        </motion.div>

        <ServicesCarousel items={SERVICE_CARDS} />

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <ServicesForm
            projectType={projectType}
            setProjectType={setProjectType}
            projectTypeOther={projectTypeOther}
            setProjectTypeOther={setProjectTypeOther}
            projectTypes={PROJECT_TYPES}
            includedSections={includedSections}
            perPage={selectedType.perPage}
            extraSections={extraSections}
            setExtraSections={setExtraSections}
            totalSections={totalSections}
            stackChoice={stackChoice}
            setStackChoice={setStackChoice}
            stackOther={stackOther}
            setStackOther={setStackOther}
            stackOptions={STACK_OPTIONS}
            selectedStackDescription={selectedStack.description}
            functionOptions={FUNCTION_OPTIONS}
            functionSelect={functionSelect}
            onFunctionSelect={handleFunctionSelect}
            customFunctionInput={customFunctionInput}
            setCustomFunctionInput={setCustomFunctionInput}
            onAddCustomFunction={addCustomFunction}
            selectedFunctionItems={selectedFunctionItems}
            customFunctions={customFunctions}
            onRemoveFunction={removeFunction}
            onRemoveCustomFunction={removeCustomFunction}
            email={email}
            setEmail={setEmail}
            formatMoney={formatMoney}
            currency={CURRENCY}
          />

          <ServicesSummary
            isComplete={isFormComplete}
            projectTypeLabel={projectTypeLabel}
            totalSections={totalSections}
            includedSections={includedSections}
            extraSections={extraSections}
            stackLabel={stackLabel}
            functionsLabelText={functionsLabelText}
            email={email}
            deliverables={DELIVERABLES}
            isSubmitDisabled={isSubmitDisabled}
            status={status}
            errorMessage={errorMessage}
            missingItems={missingItems}
            onReset={resetEstimator}
          />
        </form>

        <ServicesSuccessModal
          open={showSuccess}
          onClose={() => setShowSuccess(false)}
          onReset={resetEstimator}
        />
      </div>
    </section>
  );
};

export default Services;
