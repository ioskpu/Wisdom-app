export const wisdomsBGRaw = [
    "En la vida algunas veces se gana, otras veces se aprende (John Maxwell)",
    "No midas tu riqueza por el dinero que tienes, mídela por aquellas cosas que tienes y que no cambiarías por dinero (Paulo Coelho)",
    "Pedir perdón es de inteligentes, perdonar es de nobles y perdonarse es de sabios (Anónimo)",
    "Un hombre inteligente jamás se irritaría si tuviera delante siempre un espejo y se viera cuando discute (Anónimo)",
    "Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste (Anónimo)",
    "El que busca un amigo sin defectos se queda sin amigos (Proverbio turco)",
    "La sonrisa cuesta menos que la electricidad y da más luz (Proverbio escocés)",
    "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas (William George Ward)",
    "No encuentres la falta, encuentra el remedio (Henry Ford)",
];

export const wisdomsBG = wisdomsBGRaw.map(e => e.split(",")).reduce((acc, val) => acc.concat(val), []);