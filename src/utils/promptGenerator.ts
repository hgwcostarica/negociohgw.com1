import { CopyItem } from '../types';

export interface PromptContactOptions {
  includeContact: boolean;
  name: string;
  whatsapp: string;
  link?: string;
  customTitle?: string;
  productImageRef?: string;
  productNameCustom?: string;
}

export interface GeneratedPromptData {
  masterPrompt: string;
  chatGptUrl: string;
  sceneDescription: string;
  peopleFocus: string;
  productFocus: string;
  persuasiveTitle: string;
  recommendedAspect: string;
  styleParams: string;
}

export interface TeamBannerData {
  type: 'bienvenida' | 'ascenso_membresia' | 'rango_liderazgo';
  memberName: string;
  country: string;
  membership?: string;
  previousMembership?: string;
  newMembership?: string;
  rank?: 'Plata' | 'Oro' | 'Platinum' | 'Diamante' | 'Corona' | string;
  sponsorName?: string;
  customMessage?: string;
  userPhotoUrl?: string;
  rankLogoUrl?: string;
}

/**
 * Derives a short, high-impact persuasive headline for the graphic
 */
export function derivePersuasiveTitle(item: CopyItem): string {
  if (item.category === 'plan_negocio') {
    return '¡GANA EL 50% DE CADA VENTA!';
  } else if (item.category === 'arandanos') {
    return 'PROTEGE TU VISIÓN Y ENERGÍA';
  } else if (item.category === 'limpieza_colon') {
    return 'DESINTOXICA TU CUERPO Y VIVE LIGERO';
  } else if (item.category === 'turmalina') {
    return 'ALIVIO Y CONFORT INMEDIATO';
  } else if (item.category === 'ganoderma') {
    return 'FORTALECE TUS DEFENSAS CON REISHI';
  } else if (item.category === 'membresias') {
    return 'AHORRA 30% A 60% DE POR VIDA';
  } else if (item.category === 'prospeccion') {
    return 'CRECE Y EMPRENDE CON HGW';
  }
  
  // Fallback cleanly from headline
  const cleaned = item.headline.replace(/^[^\w\s¡!¿?]+/, '').trim();
  const words = cleaned.split(' ');
  return words.slice(0, 6).join(' ').toUpperCase();
}

export function generateProspectingImagePrompt(
  item: CopyItem, 
  options: PromptContactOptions = {
    includeContact: true,
    name: 'Yamilka Batista',
    whatsapp: '+507 6778-8375',
    link: 'hgw.yamilkabatista.com'
  }
): GeneratedPromptData {
  let people = 'Emprendedores o profesionales latinoamericanos modernos (hombres y mujeres de 28 a 45 años, aspecto empático, carismático y confiable).';
  let product = 'Tazas elegantes de café gourmet humeante HGW, laptop con métricas de crecimiento y materiales de asesoría.';
  let scene = 'Oficina moderna y luminosa o cafetería boutique con luz natural, plantas de interior y ambientación minimalista contemporánea.';
  let mood = 'Éxito, prosperidad, libertad financiera y trabajo en equipo.';

  if (item.customPrompt) {
    people = item.customPrompt.people;
    product = item.customPrompt.product;
    scene = item.customPrompt.scene;
    mood = item.customPrompt.mood;
  } else if (item.category === 'arandanos') {
    people = 'Joven profesional o mujer/hombre latinoamericano (25-38 años) con mirada viva, descansada y enfocada, frente a una laptop moderna.';
    product = 'Taza humeante de Blueberry Coffee HGW con diseño elegante, y un tazón de cristal con arándanos azules frescos y brillantes al lado de caramelos de arándano.';
    scene = 'Espacio de trabajo o estudio minimalista bañado por luz suave matutina de una ventana grande, sin fatiga visual.';
    mood = 'Claridad mental, visión nítida, energía renovada y concentración.';
  } else if (item.category === 'limpieza_colon') {
    people = 'Mujer o persona latinoamericana saludable y radiante (30-45 años) con sonrisa sincera, vistiendo ropa cómoda y fresca de lino.';
    product = 'Vaso de cristal con refrescante bebida verde detox de clorofila y hierba de cebada (Fresh Drink Chang JingJing HGW), rodajas de limón e ingredientes naturales.';
    scene = 'Cocina moderna y espaciosa con encimera de mármol blanco, luz natural del sol y frutas frescas de fondo.';
    mood = 'Ligereza, desintoxicación, bienestar digestivo y vitalidad total.';
  } else if (item.category === 'turmalina') {
    people = 'Adulto latinoamericano (35-55 años) en actitud de movilidad plena, estiramiento suave o descanso placentero, sin gestos de dolor.';
    product = 'Prenda protectora ergonómica de turmalina HGW (faja lumbar o soporte cervical) colocada con elegancia, mostrando un sutil resplandor térmico infrarrojo reconfortante.';
    scene = 'Sala de estar cálida y acogedora con tonos neutros o jardín zen relajante al atardecer.';
    mood = 'Alivio instantáneo, comodidad corporal, libertad articular y bienestar natural.';
  } else if (item.category === 'ganoderma') {
    people = 'Persona o pareja latinoamericana de mediana edad (35-55 años) disfrutando con serenidad y vigor de una mañana soleada.';
    product = 'Taza de café gourmet con Ganoderma Lucidum (Reishi) HGW con crema suave, hongo Reishi brillante de exhibición y granos de café tostados selectos.';
    scene = 'Terraza con vistas a naturaleza o mesa rústica de madera noble con iluminación dorada.';
    mood = 'Inmunidad fuerte, longevidad, vitalidad y salud celular profunda.';
  } else if (item.category === 'membresias') {
    people = 'Consumidor inteligente o familia latinoamericana sonriente abriendo una caja de productos HGW recién llegada a su hogar.';
    product = 'Caja de entrega con productos variados HGW (cafés de arándanos, caramelos, tés detox, turmalina) con tarjeta de descuento 30%-60%.';
    scene = 'Comedor moderno y cálido con luz de día, atmósfera familiar de ahorro y satisfacción.';
    mood = 'Ahorro inteligente, compras al mayor, satisfacción y bienestar familiar.';
  } else if (item.category === 'prospeccion') {
    people = 'Emprendedor(a) latinoamericano(a) moderno(a) de 30 años, sosteniendo un smartphone y sonriendo mientras atiende mensajes de clientes.';
    product = 'Escritorio con laptop, taza de café HGW y libreta con apuntes de liderazgo.';
    scene = 'Espacio de trabajo flexible, balcón urbano o cafetería con ambiente dinámico.';
    mood = 'Conexión, oportunidad de negocio, comunicación ágil y crecimiento personal.';
  }

  // Check if custom product image was provided or attached
  let customProductImageInstruction = '';
  if (options.productImageRef) {
    customProductImageInstruction = `
📸 REFERENCIA DE IMAGEN DEL PRODUCTO:
Se adjunta / referencia la imagen oficial del producto HGW (${options.productNameCustom || 'Producto HGW'}). Integrar este empaque o producto con fidelidad visual exacta de etiqueta, colores corporativos y proporciones realistas.`;
  }

  const persuasiveTitle = (options.customTitle && options.customTitle.trim()) 
    ? options.customTitle.trim().toUpperCase() 
    : derivePersuasiveTitle(item);

  // Build contact card specifications (mandatory 65% opacity dark background, white text on bottom left)
  let contactInstructions = '';
  if (options.includeContact && (options.name || options.whatsapp || options.link)) {
    const contactLines: string[] = [];
    if (options.name && options.name.trim()) contactLines.push(`• Nombre: ${options.name.trim()}`);
    if (options.whatsapp && options.whatsapp.trim()) contactLines.push(`• WhatsApp: ${options.whatsapp.trim()}`);
    if (options.link && options.link.trim()) contactLines.push(`• Enlace: ${options.link.trim()}`);

    contactInstructions = `
📇 DATOS DE CONTACTO INTEGRADOS (Esquina inferior izquierda):
En la esquina inferior izquierda de la imagen, superponer una elegante cápsula / recuadro con esquinas redondeadas, fondo oscuro semitransparente con 65% de opacidad (dark background 65% opacity), y tipografía nítida en COLOR BLANCO puro:
${contactLines.join('\n')}`;
  }

  const masterPrompt = `Crea una imagen publicitaria de prospección hiperrealista de alto impacto comercial para redes sociales (formato 1:1 para Instagram, Facebook y WhatsApp Status).

🎯 OBJETIVO & ENFOQUE DEL ANUNCIO:
"${item.headline}"

🏷️ TÍTULO PERSUASIVO EN LA IMAGEN (Parte superior o centro-superior):
Colocar un título persuasivo, corto y de alto impacto publicitario: "${persuasiveTitle}".
Diseño del título: Tipografía moderna, limpia, de fácil lectura comercial, en COLOR BLANCO con SOMBRA suave y elegante (drop shadow) para resaltar y contrastar perfectamente sobre el fondo.

👥 PERSONAS Y PROTAGONISTAS:
${people}
Las personas deben tener rasgos auténticos latinoamericanos, expresiones naturales de ${mood}, vestimenta casual-profesional moderna y lenguaje corporal seguro y relajado.

📦 INTEGRACIÓN DE PRODUCTO & ELEMENTOS HGW:
${product}
${customProductImageInstruction}
Los elementos deben integrarse de forma orgánica y atractiva en la escena, como en un anuncio publicitario de salud y estilo de vida premium.

🏡 AMBIENTACIÓN & ESCENARIO:
${scene}
${contactInstructions}

📸 ESPECIFICACIONES FOTOGRÁFICAS & CALIDAD:
- Estilo: Fotografía publicitaria comercial de alta gama (commercial lifestyle photography).
- Cámara & Lente: 85mm f/1.8 para un desenfoque de fondo suave (bokeh agradable) y enfoque ultra nítido en los sujetos y productos.
- Iluminación: Luz natural suave, cálida y envolvente, sin reflejos molestos ni sombras duras.
- Calidad: 8K, hiperrealista, piel y texturas realistas sin deformaciones ni artefactos visuales.`;

  const fullChatGptPrompt = `Hola ChatGPT. Por favor genera una imagen hiperrealista para una campaña de prospección en redes sociales con DALL-E 3 usando las siguientes especificaciones exactas:

${masterPrompt}

Además, aquí está el guion / copy persuasivo completo que acompañará esta publicación para mantener total coherencia visual y de mensaje:
═════════════════════════════════════════════════
📝 GUION / COPY PARA LA PUBLICACIÓN:
═════════════════════════════════════════════════
${item.headline}

${item.content}

${item.callToAction}
═════════════════════════════════════════════════
Por favor genera la imagen con DALL-E 3 ahora con el título en blanco con sombra y los datos de contacto en la esquina inferior izquierda.`;

  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(fullChatGptPrompt)}`;

  return {
    masterPrompt,
    chatGptUrl,
    sceneDescription: scene,
    peopleFocus: people,
    productFocus: product,
    persuasiveTitle,
    recommendedAspect: '1:1 (Feed) / 4:5 (Instagram/FB)',
    styleParams: 'Fotografía Comercial Hiperrealista 8K • 85mm Lens • Iluminación Natural'
  };
}

/**
 * Generates high-impact AI Prompts for Team Recognition Banners:
 * 1. Welcome to the Team
 * 2. Membership Upgrade
 * 3. Leadership Rank (Plata, Oro, Platino, Diamante)
 */
export function generateTeamBannerPrompt(banner: TeamBannerData): {
  promptText: string;
  chatGptUrl: string;
  headlineTitle: string;
} {
  const memberName = banner.memberName || '[Nombre del Socio]';
  const country = banner.country || 'Latinoamérica';
  const sponsor = banner.sponsorName ? `Patrocinador: ${banner.sponsorName}` : '';

  if (banner.type === 'bienvenida') {
    const membership = banner.membership || 'Master';
    const headline = '¡BIENVENIDO(A) AL EQUIPO HGW!';
    const promptText = `Crea un banner gráfico corporativo de lujo y celebración para redes sociales (formato 1:1 o 4:5) para dar la BIENVENIDA A UN NUEVO SOCIO de HGW (Health Green World).

🎨 ESTILO VISUAL & PALETA:
- Fondo: Azul marino profundo (#0A2540) y azul petróleo con destellos geométricos dorados metálicos, partículas de luz elegantes y hojas verdes botánicas sutiles que representan bienestar.
- Tipografía: Títulos en tipografía Serif/Sans geométrica dorada con bisel luminoso y subtítulos en blanco puro nítido.

🖼️ ESTRUCTURA & COMPOSICIÓN DEL BANNER:
1. **Encabezado Superior**:
   - Texto principal: "${headline}"
   - Subtexto: "Salud, Bienestar y Libertad Financiera"
2. **Marco Central para Fotografía del Socio**:
   - Marco circular u ovalado con borde doble de oro pulido brillante y resplandor suave.
   - [FOTO DEL SOCIO]: Integrar retrato profesional en primer plano de ${memberName}, sonriente y con vestimenta ejecutiva elegante.
3. **Tarjeta de Datos del Socio (Parte Inferior)**:
   - Nombre destacado: **${memberName}** (Tipografía blanca grande y estilizada).
   - Membresía de Inicio: **Membresía ${membership}** (Insignia o badge dorado/esmeralda).
   - País: **${country}** (con bandera o detalle de país).
   ${sponsor ? `- ${sponsor}` : ''}
4. **Logotipo & Sellos**:
   - Logotipo oficial HGW en la parte superior central o esquina superior derecha.
   - Sello dorado: "Plan Ganancia Mutua 50/50".

📸 ESPECIFICACIONES DE CALIDAD:
- Renderizado 8K, diseño gráfico publicitario premium tipo cartel de convención internacional.
- Iluminación de estudio, contrastes nítidos, acabados dorados metálicos fotorrealistas.`;

    return {
      promptText,
      chatGptUrl: `https://chatgpt.com/?q=${encodeURIComponent('Genera la siguiente imagen de banner de bienvenida con DALL-E 3:\n\n' + promptText)}`,
      headlineTitle: headline
    };
  } else if (banner.type === 'ascenso_membresia') {
    const prev = banner.previousMembership || 'Junior';
    const next = banner.newMembership || 'Master';
    const headline = '¡FELICITACIONES POR TU ASCENSO DE MEMBRESÍA!';
    const promptText = `Crea un banner publicitario de RECONOCIMIENTO POR ASCENSO DE MEMBRESÍA para HGW (Health Green World) en formato cuadrado 1:1 de alta definición.

🎨 PALETA & AMBIENTACIÓN:
- Fondo: Gradiente sofisticado de azul zafiro oscuro a esmeralda intenso, con fuegos artificiales dorados tenues de fondo, destellos de cristal y líneas de crecimiento financiero.

🖼️ COMPOSICIÓN DEL BANNER:
1. **Título Principal (Top)**:
   - "${headline}"
   - Insignia destacada: "UPGRADE EMPRESARIAL"
2. **Fotografía del Líder / Socio**:
   - Marco de honor con gemas doradas y resplandor de éxito.
   - Retrato de ${memberName}, con actitud inspiradora y victoriosa.
3. **Indicador de Ascenso**:
   - De: [Membresía ${prev}] ➔ A: **[NUEVA MEMBRESÍA ${next.toUpperCase()}]** en letras doradas resplandecientes con corona o diamantes.
4. **Información**:
   - Nombre: **${memberName}**
   - País: **${country}**
   - Mensaje: "Subiendo al siguiente nivel de ganancias, bonos élite y descuentos de por vida."
   ${sponsor ? `- ${sponsor}` : ''}

📸 ESPECIFICACIONES:
- Gráficos vectoriales y 3D de alta fidelidad, brillos fotorrealistas, aspecto de premiación ejecutiva internacional.`;

    return {
      promptText,
      chatGptUrl: `https://chatgpt.com/?q=${encodeURIComponent('Genera este banner de ascenso de membresía con DALL-E 3:\n\n' + promptText)}`,
      headlineTitle: headline
    };
  } else {
    // Rango de Liderazgo (Plata, Oro, Platino, Diamante)
    const rank = banner.rank || 'Diamante';
    const rankColors: Record<string, string> = {
      Plata: 'Plateado cromado brillante, azul noche y destellos de platino pulido',
      Oro: 'Oro amarillo 24K brillante, reflejos dorados y fondo azul real de gala',
      Platinum: 'Platino iridiscente, zafiro brillante y efectos de cristal luminoso',
      Diamante: 'Diamante puro resplandeciente con prismas de luz celeste, fondo azul marino y oro blanco',
      Corona: 'Corona real dorada con rubíes y diamantes, terciopelo azul noche'
    };

    const colorScheme = rankColors[rank] || rankColors['Diamante'];
    const headline = `¡NUEVO RANGO ${rank.toUpperCase()} ALCANZADO!`;

    const promptText = `Crea un banner de RECONOCIMIENTO DE RANGO DE LIDERAZGO HGW para el Rango **${rank.toUpperCase()}** (Health Green World). Formato 1:1 para redes sociales.

💎 TEMÁTICA DE COLOR & ESTILO:
- Paleta: ${colorScheme}.
- Atmósfera: Gala de premiación internacional, alfombra azul, reflectores de escenario, lluvia de confeti dorado y trofeo o pin de Rango ${rank} reluciente.

🏆 ELEMENTOS DEL DISEÑO:
1. **Cabecera de Homenaje**:
   - "🌟 RECONOCIMIENTO DE LIDERAZGO 🌟"
   - Título gigante con relieve 3D: "NUEVO RANGO ${rank.toUpperCase()}"
2. **Fotografía del Líder Reconocido**:
   - Marco circular de honor con ornamentos dorados y el logo/pin oficial del Rango ${rank} colocado en el vértice inferior del marco.
   - Retrato triunfante de **${memberName}**.
3. **Placa de Honor**:
   - Nombre en grande: **${memberName}**
   - País: **${country}**
   - Frase motivacional: "El éxito es la suma de pequeños esfuerzos repetidos cada día. ¡Felicidades Líder!"
   ${sponsor ? `- ${sponsor}` : ''}
4. **Identidad Corporativa**:
   - Logotipo HGW en dorado en la esquina superior.

📸 CALIDAD:
- Calidad de estudio fotográfico publicitario 8K, texturas de metal y gemas hiperrealistas, acabado limpio sin artefactos.`;

    return {
      promptText,
      chatGptUrl: `https://chatgpt.com/?q=${encodeURIComponent('Genera este banner de reconocimiento de rango con DALL-E 3:\n\n' + promptText)}`,
      headlineTitle: headline
    };
  }
}
