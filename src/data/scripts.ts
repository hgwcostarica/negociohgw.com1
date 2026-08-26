export interface ScriptItem {
  id: string;
  category: 'bienvenida' | 'presentacion' | 'seguimiento' | 'cierre' | 'evento_presencial' | 'invitacion_zoom';
  title: string;
  targetAudience: string;
  context: string;
  message: string;
  tips: string[];
}

export const scriptsData: ScriptItem[] = [
  // ==========================================
  // 1. BIENVENIDA (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-bienvenida-nuevo-socio',
    category: 'bienvenida',
    title: 'Bienvenida Cálida a Nuevo Socio de Negocio',
    targetAudience: 'Nuevo distribuidor recién registrado y activado con membresía',
    context: 'Enviar inmediatamente después del pago y confirmación de membresía en el sistema',
    message: `¡Hola [Nombre]! 👋🎉 ¡Qué gran alegría darte la bienvenida oficial a nuestro equipo HGW y a la familia de Health Green World! 🌿✨

Tu número de socio oficial ya está activo. A partir de hoy cuentas con todo nuestro respaldo, asesoría y sistema de capacitación paso a paso para que alcances tus metas financieras y de salud. 🚀

📌 Los primeros 3 pasos que daremos juntos:
1️⃣ Te enviaré tu acceso al portal virtual oficial para gestionar tus pedidos y comisiones.
2️⃣ Agendaremos tu sesión de arranque de 20 minutos para definir tu plan de acción de 30 días.
3️⃣ Te uniré a nuestro grupo VIP de WhatsApp de líderes y apoyo continuo.

¡Felicidades por tomar la decisión de construir tu libertad financiera con el Plan Ganancia Mutua! 🤝💪`,
    tips: [
      'Personaliza con el nombre del socio y envíale su código de usuario',
      'Programa la llamada de arranque dentro de las primeras 24-48 horas'
    ]
  },
  {
    id: 'script-bienvenida-cliente-producto',
    category: 'bienvenida',
    title: 'Bienvenida a Cliente Preferente de Productos',
    targetAudience: 'Persona que adquirió productos para consumo personal o de salud',
    context: 'Enviar tras la entrega o despacho de su pedido de productos HGW',
    message: `¡Hola [Nombre]! 🌿 Espero que estés teniendo un excelente día.

Te escribo para felicitarte por elegir cuidar tu salud con los productos orgánicos de HGW ([Nombre del producto]). 🫐✨

📦 Tu pedido está listo / en camino (recuerda que los envíos toman entre 3 a 6 días hábiles dependiendo de la distancia y volumen de pedidos).

💡 En cuanto lo tengas en tus manos, avísame para enviarte la guía de consumo recomendada para que aproveches al 100% todos sus nutrientes y beneficios.

¡Estoy a tu completa disposición para cualquier duda sobre el modo de uso! 🤝`,
    tips: [
      'Menciona el producto exacto que compró',
      'Haz seguimiento al tercer día para confirmar que comenzó su consumo'
    ]
  },
  {
    id: 'script-bienvenida-grupo-whatsapp',
    category: 'bienvenida',
    title: 'Mensaje de Bienvenida para el Grupo de WhatsApp de Equipo',
    targetAudience: 'Publicación grupal para edificar al nuevo integrante',
    context: 'Publicar en el grupo de WhatsApp o Telegram del equipo al incorporar al socio',
    message: `🌟 ¡EQUIPO, demos una calurosa bienvenida a [Nombre del Socio] desde [País / Ciudad]! 👏🎉🌎

[Nombre] se une hoy a nuestra visión con la membresía [Membresía: Master / Senior / Junior] decidido(a) a transformar su salud y construir ingresos residuales sólidos con el sistema 50/50 de HGW. 💎🌿

¡Bienvenido(a) a casa [Nombre]! Aquí estamos todos para apoyarte y celebrar cada uno de tus logros. ¡Vamos con todo por tus metas! 🚀🔥💪`,
    tips: [
      'Pide al equipo que responda con stickers y mensajes de ánimo',
      'Adjunta el banner de bienvenida generado con su foto'
    ]
  },
  {
    id: 'script-bienvenida-reunion-arranque',
    category: 'bienvenida',
    title: 'Invitación a la Sesión de Arranque Explosivo',
    targetAudience: 'Socio en sus primeras 48 horas de afiliación',
    context: 'Fijar hora y fecha para la primera capacitación personalizada',
    message: `¡Hola [Nombre]! 🚀 Espero que estés súper emocionado(a) con tu inicio en HGW.

Para asegurarnos de que recuperes tu inversión y generes tus primeras comisiones en tu primera o segunda semana, necesitamos hacer tu **Sesión de Arranque Explosivo** (dura 25 minutos). ⏱️

En esta sesión definiremos:
✅ Tus metas de ingresos para este mes.
✅ Tu lista de contactos calificados y guiones listos para enviar.
✅ Las fechas de las próximas presentaciones Zoom para tus prospectos.

¿Qué horario te queda mejor: hoy a las [Hora 1] o mañana a las [Hora 2]? 📲`,
    tips: [
      'Da siempre dos opciones de horario para facilitar la decisión',
      'Ten listo el plan de 30 días antes de entrar a la llamada'
    ]
  },
  {
    id: 'script-bienvenida-reactivacion',
    category: 'bienvenida',
    title: 'Bienvenida y Reactivación de Socio en Pausa',
    targetAudience: 'Socio que estuvo inactivo y desea retomar el negocio',
    context: 'Reconexión con socios antiguos que quieren reactivarse con las nuevas herramientas',
    message: `¡Hola [Nombre]! Qué gusto saludarte de nuevo. 😊🌿

Te escribo porque sé lo importante que eran tus metas cuando te uniste a HGW, y hoy tenemos noticias espectaculares:
🚀 Estamos lanzando un nuevo catálogo interactivo, herramientas de IA para prospección y capacitaciones semanales en vivo.
💰 El sistema 50/50 y los bonos de recompra mutua están generando resultados récord en toda la región.

Me encantaría ponernos al día en una videollamada de 10 minutos y mostrarte las nuevas estrategias para que reactivemos tu código sin estrés y a tu ritmo. ¿Cuándo tendrías un espacio libre? 🤝`,
    tips: [
      'No juzgues su inactividad previa, enfócate en el presente y el futuro',
      'Muestra las nuevas herramientas disponibles para inspirar confianza'
    ]
  },

  // ==========================================
  // 2. PRESENTACIÓN (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-presentacion-directa-negocio',
    category: 'presentacion',
    title: 'Presentación Directa de la Oportunidad de Negocio',
    targetAudience: 'Emprendedores, amigos o contactos interesados en generar ingresos',
    context: 'Contacto inicial tras detectar interés en emprender o generar ingresos extra',
    message: `¡Hola [Nombre]! 👋 Espero que estés muy bien.

Te escribo porque sé que eres una persona con visión y ganas de salir adelante. 💡

Actualmente estoy expandiendo en [País del prospecto] una compañía internacional de bienestar con más de 31 años de respaldo llamada **HGW (Health Green World)**. 🌿

Lo más potente es su modelo de **Ganancia Mutua 50/50**, donde ganas el 50% de las comisiones que genera tu equipo y cobras de la red de tu patrocinador, con productos de consumo diario como café gourmet con arándanos y ganoderma. ☕🫐

Preparé un video corto de 5 minutos donde se explica el modelo exacto. ¿Si te lo envío, tendrías 5 minutos para verlo hoy? 📲`,
    tips: [
      'Usa la fórmula "Si yo... ¿tú...?" para generar compromiso antes de enviar el link',
      'No expliques todo el plan por texto, apóyate en el video o la presentación'
    ]
  },
  {
    id: 'script-presentacion-producto-salud',
    category: 'presentacion',
    title: 'Presentación de Productos Enfocada en Solución de Salud',
    targetAudience: 'Personas con cansancio visual, digestión lenta o dolores articulares',
    context: 'Conversación donde la persona menciona un problema de salud o bienestar',
    message: `¡Hola [Nombre]! Me quedé pensando en lo que me comentaste sobre [Problema: cansancio en la vista / digestión pesada / dolor en la espalda]. 😔

Quiero compartirte algo que a mí y a muchas personas les ha cambiado la vida: los productos orgánicos de **HGW**. 🌿

Por ejemplo, su [Blueberry Coffee / Fresh Drink Chang JingJing / Faja de Turmalina] está formulado con fitonutrientes puros de grado terapéutico y resultados comprobados desde la primera semana. 🫐✨

Te puedo enviar una ficha visual corta con los beneficios y testimonios. ¿Te gustaría revisarla sin ningún compromiso? 📄`,
    tips: [
      'Sé empático y personaliza con el problema exacto que la persona tiene',
      'Ofrece información de valor sin presionar la venta inmediata'
    ]
  },
  {
    id: 'script-presentacion-curiosidad-redes',
    category: 'presentacion',
    title: 'Respuesta a Prospectos que Preguntan por tus Estados o Historias',
    targetAudience: 'Personas que reaccionan a fotos de café, productos o cheques',
    context: 'Cuando alguien responde a tus historias de WhatsApp, Instagram o Facebook',
    message: `¡Hola [Nombre]! 👋 Gracias por responder a mi estado. 😊

Lo que viste es parte de lo que estamos haciendo con **HGW**: distribuimos productos saludables de altísima rotación (cafés funcionales, tés detox, artículos terapéuticos) y generamos ingresos diarios en dólares trabajando desde el celular. ☕📱

El plan de compensación te permite ganar desde un 30% a 60% de margen comercial más comisiones de equipo 50/50. 💵

¿Te interesaría conocer cómo funciona para generar un ingreso extra o te llamó la atención probar el producto? Cuéntame y te paso la info adecuada. 🤝`,
    tips: [
      'Filtra si el prospecto tiene interés en negocio o solo en consumo',
      'Responde con entusiasmo y rapidez mientras el interés está caliente'
    ]
  },
  {
    id: 'script-presentacion-para-networkers',
    category: 'presentacion',
    title: 'Presentación Profesional para Networkers con Experiencia',
    targetAudience: 'Líderes de la industria de redes de mercadeo o ex-distribuidores',
    context: 'Conversación B2B con profesionales que entienden planes de compensación',
    message: `¡Hola [Nombre]! Un gusto saludarte. Veo que sigues muy activo(a) en el mundo del network marketing y el liderazgo. 👏

Te contacto con mucho respeto profesional porque en este 2026 estamos viendo una migración masiva hacia **HGW (Health Green World)** por 3 factores que resuelven los dolores típicos de nuestra industria:

1️⃣ **Plan Ganancia Mutua 50/50**: Ganas el 50% del bono de equipo de tus directos en profundidad ilimitada.
2️⃣ **Cero reconsumos forzosos mensuales**: Puntos acumulados vitalicios que nunca se borran.
3️⃣ **Bono de Recompra Cruzado (2.5%)**: Cobras comisiones del derrame de tu línea ascendente.
4️⃣ Sedes oficiales con stock y facturación local en 13 países de América y España. 🏢

Me encantaría enviarte la tabla matemática de compensación para que la analices con tus propios números. ¿Te parece si te la comparto? 📊`,
    tips: [
      'Habla en lenguaje de números, retención y candados superados',
      'Edifica su trayectoria antes de mostrar el plan'
    ]
  },
  {
    id: 'script-presentacion-testimonio-personal',
    category: 'presentacion',
    title: 'Presentación Basada en Storytelling y Testimonio Real',
    targetAudience: 'Contactos cálidos, familiares y amigos cercanos',
    context: 'Compartir tu historia personal de cómo HGW impactó tu vida o finanzas',
    message: `¡Hola [Nombre]! Quería contarte algo muy especial que me está pasando. ❤️

Hace un tiempo estaba buscando una forma de [Mejorar mi salud / Tener un ingreso extra sin descuidar mi familia] y encontré **HGW**. 🌿

Empecé probando los productos de arándanos y el cambio en mi energía y bienestar fue increíble. Pero cuando conocí su plan de ganancias 50/50, decidí compartirlo y hoy estoy generando ingresos constantes todas las semanas desde mi casa. 🏡💵

Me acordé mucho de ti porque sé que eres una persona trabajadora y esto te vendría de maravilla. ¿Te gustaría que nos tomemos un café virtual de 15 minutos y te cuento cómo funciona? ☕✨`,
    tips: [
      'Usa emociones genuinas y explica tu "Por qué"',
      'No prometas cifras irreales, enfócate en la tranquilidad y el progreso'
    ]
  },

  // ==========================================
  // 3. SEGUIMIENTO (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-seguimiento-24h-video',
    category: 'seguimiento',
    title: 'Seguimiento 24 Horas tras Enviar Video o Información',
    targetAudience: 'Prospecto que recibió el video de presentación el día anterior',
    context: 'Revisar impresiones sin hacer preguntas cerradas de "sí/no"',
    message: `¡Hola [Nombre]! 👋 Espero que estés teniendo un excelente día.

Te escribo para saber si ya tuviste oportunidad de ver el video de 5 minutos que te compartí ayer. 🎬

Cuéntame: **¿Qué fue lo que más te llamó la atención: los beneficios de los productos de salud o el sistema de ganancias 50/50?** 😊🌿`,
    tips: [
      'Pregunta siempre "¿Qué fue lo que más te gustó?" en lugar de "¿Lo viste?"',
      'Guía la conversación hacia la parte positiva del negocio'
    ]
  },
  {
    id: 'script-seguimiento-aporte-valor',
    category: 'seguimiento',
    title: 'Seguimiento con Aporte de Valor y Testimonio Nuevo',
    targetAudience: 'Prospecto que no ha respondido o está indeciso',
    context: 'Enviar 3 o 4 días después sin presionar, aportando un testimonio real',
    message: `¡Hola [Nombre]! Pasaba por aquí a saludarte y recordé nuestra conversación. 😊

Acaban de compartir en nuestro grupo este testimonio de una persona en [País del prospecto] que logró [Mejorar su digestión con Chang JingJing / Generar sus primeros $350 USD en 2 semanas con HGW] y quise compartírtelo porque sé que era justamente lo que buscabas. 🌟

¿Cómo van tus tiempos esta semana para resolver cualquier duda que te haya quedado pendiente? 🤝`,
    tips: [
      'El seguimiento profesional educa y aporta pruebas sociales',
      'Evita frases como "¿Sigues interesado?" que generan rechazo'
    ]
  },
  {
    id: 'script-seguimiento-post-zoom',
    category: 'seguimiento',
    title: 'Seguimiento Inmediato Post-Presentación en Zoom',
    targetAudience: 'Prospecto que acaba de salir de la sala de Zoom en vivo',
    context: 'Enviar en los primeros 10 minutos al finalizar la reunión virtual',
    message: `¡Hola [Nombre]! Te vi conectado(a) en la sala de Zoom, ¡felicidades por tu puntualidad y tiempo! 👏🎉

La presentación estuvo increíble. Cuéntame con sinceridad: en una escala del 1 al 10 (donde 1 es solo consumidor de productos y 10 es listo para arrancar el negocio hoy mismo), **¿en qué número te encuentras tú?** 🚀`,
    tips: [
      'La escala del 1 al 10 clarifica inmediatamente el nivel de interés',
      'Si responde 7 u 8, pregunta: "¿Qué te falta para llegar al 10?"'
    ]
  },
  {
    id: 'script-seguimiento-posicionamiento-equipo',
    category: 'seguimiento',
    title: 'Seguimiento de Urgencia por Derrame y Posicionamiento',
    targetAudience: 'Prospecto interesado que está postergando su registro',
    context: 'Cuando estás por afiliar a un nuevo socio debajo en la estructura',
    message: `¡Hola [Nombre]! Te escribo rapidito porque me acordé de ti. ⚡

Estoy a punto de registrar a 2 nuevos socios en mi equipo de [País / Ciudad]. Por la estructura de Ganancia Mutua de HGW, si te activas hoy con tu membresía, estas personas y su volumen quedarán posicionadas directamente debajo de ti en la red. 📈

No quería hacer el registro sin avisarte primero para que no pierdas esa posición privilegiada. ¿Alcanzamos a activar tu código en los próximos 30 minutos? 📲`,
    tips: [
      'Usa este script solo cuando sea verdad y tengas registros pendientes',
      'Crea una sensación sana de escasez y beneficio inmediato'
    ]
  },
  {
    id: 'script-seguimiento-cierre-puerta-amable',
    category: 'seguimiento',
    title: 'Seguimiento de Despedida Elegante (Quitar la Presión)',
    targetAudience: 'Prospecto que ha dejado en visto varios mensajes',
    context: 'Último mensaje para limpiar la lista y recuperar el control con postura',
    message: `¡Hola [Nombre]! Veo que has estado con la agenda bastante ocupada, y lo entiendo perfectamente. 😊

Te escribo solo para liberar tu tiempo: asumo que por ahora este proyecto no es una prioridad para ti o no es tu momento, y no hay ningún problema. 🌿

Dejaré de escribirte sobre el negocio para no incomodarte, pero seguimos en contacto como siempre por aquí para lo que necesites o si algún día deseas probar algún producto de salud. ¡Te deseo el mayor de los éxitos! Un abrazo fuerte. 🤝`,
    tips: [
      'Quitar la oferta a menudo provoca que el prospecto responda pidiendo disculpas y pidiendo retomar',
      'Mantiene la postura profesional alta y la amistad intacta'
    ]
  },

  // ==========================================
  // 4. CIERRE (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-cierre-eleccion-membresia',
    category: 'cierre',
    title: 'Cierre de Doble Alternativa por Nivel de Membresía',
    targetAudience: 'Prospecto que vio la presentación completa y le gustó el negocio',
    context: 'Definir el paquete de inicio en la llamada o chat de cierre',
    message: `¡Excelente [Nombre]! Me alegra muchísimo que hayas visto la visión de HGW. 🚀

Para comenzar y activar tu código con descuentos del 30% al 60% de por vida, tenemos 4 opciones de membresía:

💎 **Master (600 BV)**: El paquete empresarial completo con tope máximo de $720 USD diarios y bono élite hasta 6 generaciones.
⭐ **Senior (300 BV)**: Paquete intermedio de alto rendimiento.
🟢 **Junior (100 BV)** o **Pre-Junior (50 BV)**: Paquetes accesibles para arrancar con productos esenciales.

Viendo tus metas económicas y tu presupuesto actual, **¿prefieres arrancar con la Membresía Master para tener todas las ganancias al máximo o prefieres comenzar con la Junior y luego subir de rango?** 💳`,
    tips: [
      'Usa siempre la técnica de doble alternativa (A o B)',
      'Recuerda que todas las membresías acumulan puntos para ascenso'
    ]
  },
  {
    id: 'script-cierre-manejo-objecion-dinero',
    category: 'cierre',
    title: 'Cierre con Manejo de Objeción: "No tengo el dinero"',
    targetAudience: 'Prospecto que desea ingresar pero dice no contar con capital',
    context: 'Ayudar a ver que la falta de dinero es la razón para hacerlo, no para detenerse',
    message: `Te entiendo perfectamente [Nombre], a mí me pasó exactamente lo mismo al inicio. 🤝

Pero déjame hacerte una pregunta con todo el respeto y cariño: si sigues haciendo lo mismo que has hecho en los últimos 2 años, ¿crees que en 6 meses tu situación económica va a cambiar mágicamente? 💭

Precisamente porque el dinero está ajustado es que necesitas un vehículo como HGW. Lo bueno es que puedes arrancar desde un paquete Pre-Junior muy accesible, vender los productos recuperando tu capital con hasta 60% de ganancia y reinvertir. 

Si te enseño una estrategia para conseguir el capital de tu membresía en 48 horas mediante preventa de café o té, ¿estarías dispuesto(a) a trabajarla conmigo hoy mismo? 💪`,
    tips: [
      'Valida su emoción: "Te entiendo... me pasó lo mismo... pero descubrí..."',
      'Ofrécele la estrategia de preventa de 5 a 10 cajas de café entre sus amigos'
    ]
  },
  {
    id: 'script-cierre-manejo-objecion-tiempo',
    category: 'cierre',
    title: 'Cierre con Manejo de Objeción: "No tengo tiempo"',
    targetAudience: 'Empleados o personas con horarios ocupados',
    context: 'Demostrar que el sistema trabaja en apalancamiento',
    message: `¡Comprendo totalmente [Nombre]! Casi todos en el equipo empezamos trabajando a tiempo completo o con hijos pequeños. ⏰

La gran ventaja de HGW es que no necesitas 8 horas al día. Con **1 hora diaria bien enfocada** desde tu WhatsApp:
📱 Compartes videos oficiales y testimonios ya creados.
💻 Conectas a tus interesados a nuestras salas de Zoom donde líderes con experiencia presentan el negocio por ti.
💰 Ganas el 50% del esfuerzo del equipo gracias al apalancamiento mutuo.

Si yo te ayudo a organizar esa hora productiva al día, ¿arrancamos con tu registro hoy? 🚀`,
    tips: [
      'Muestra que el sistema ya está automatizado con herramientas listas',
      'Enfócate en la ganancia de tiempo a mediano plazo'
    ]
  },
  {
    id: 'script-cierre-pago-inmediato',
    category: 'cierre',
    title: 'Instrucciones Claras para el Pago y Activación',
    targetAudience: 'Prospecto que confirmó la membresía que desea adquirir',
    context: 'Enviar métodos de pago oficiales según su país',
    message: `¡Felicitaciones por tu decisión [Nombre]! Es el primer gran paso hacia tu independencia. 👏🎉

Para emitir tu factura y activar tu código oficial de socio en [País]:

📝 Necesito estos datos básicos:
• Nombre completo:
• Número de Documento / Cédula / DNI:
• Teléfono WhatsApp:
• Correo electrónico:
• Dirección de entrega para tus productos:

💳 Los métodos de pago autorizados en tu país son: [Transferencia bancaria local / Depósito en oficina / Tarjeta de débito o crédito].

Envíame tus datos y te paso la cuenta oficial para registrarte de inmediato. 📲`,
    tips: [
      'Haz que el proceso sea sencillo y transmita total seguridad y respaldo corporativo',
      'Recuérdale que los métodos de pago varían según país y que la entrega toma entre 3 a 6 días hábiles'
    ]
  },
  {
    id: 'script-cierre-garantia-acompanamiento',
    category: 'cierre',
    title: 'Cierre Basado en Acompañamiento y Seguridad',
    targetAudience: 'Prospecto con miedo al fracaso o a estar solo en el proceso',
    context: 'Generar tranquilidad y respaldo total del equipo',
    message: `Sé que empezar algo nuevo puede dar un poco de temor [Nombre], es completamente natural. 😊

Pero quiero que sepas algo muy importante: **en HGW nunca vas a estar solo(a)**. 🤝
✅ Te acompañaré en tus primeras presentaciones y llamadas.
✅ Te daré todos los guiones, copys y herramientas digitales ya probadas.
✅ Entrarás a un sistema de formación de liderazgo desde cero.

Mi compromiso es ayudarte a ganar dinero desde tu primer mes. Si tú pones las ganas y el compromiso, yo pongo la estrategia y el tiempo. ¿Empezamos hoy? 🚀✨`,
    tips: [
      'Transmite calma, confianza y firmeza en tu voz o texto',
      'El prospecto se afilia a ti y a tu confianza antes que a la empresa'
    ]
  },

  // ==========================================
  // 5. INVITACIÓN A EVENTOS PRESENCIALES (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-evento-oficina-oficial',
    category: 'evento_presencial',
    title: 'Invitación a Charla de Bienestar en Oficina Oficial HGW',
    targetAudience: 'Contactos locales en ciudades con sede oficial HGW',
    context: 'Invitar a conocer las oficinas, probar productos y ver la presentación',
    message: `¡Hola [Nombre]! Espero que estés excelente. 🌿

Este [Día de la semana] a las [Hora] tendremos un encuentro exclusivo en nuestra oficina oficial HGW de [Ciudad / Sede: ej. Sede Miraflores Lima / Sede Bogotá Norte / Sede Santa Cruz]. 🏢

Tendremos:
☕ Degustación gratuita de nuestro Café Gourmet con Arándanos y Bebidas Verdes.
💆 Demostración en vivo de los artículos térmicos de Turmalina.
📈 Presentación del modelo de negocio y expansión para este 2026.

Los cupos por protocolo de sala son limitados. ¿Te gustaría que te reserve un pase de invitado especial para ti y un acompañante? 🎟️✨`,
    tips: [
      'Menciona la dirección oficial de la sede (disponible en la sección de Sedes)',
      'Recuérdale que al acudir a la oficina debe dar tu número de usuario patrocinador'
    ]
  },
  {
    id: 'script-evento-degustacion-cafe',
    category: 'evento_presencial',
    title: 'Invitación Casual a Tarde de Café y Bienestar',
    targetAudience: 'Amigos, familiares, conocidos y compañeros de trabajo',
    context: 'Invitación relajada y atractiva sin tecnicismos corporativos',
    message: `¡Hola [Nombre]! ☕ ¿Qué planes tienes este [Día: ej. sábado] por la tarde?

Voy a organizar una degustación de cafés orgánicos saludables y superalimentos con un grupo de amigos en [Lugar / Oficina / Cafetería]. 🫐✨

Es un espacio súper ameno para probar un café delicioso que cuida la vista y la digestión, y conocer cómo estamos generando ingresos con su distribución. ¡Me encantaría que vengas y me des tu opinión sobre el sabor!

¿Cuento contigo a las [Hora]? 🤝`,
    tips: [
      'El concepto "tarde de café" tiene una tasa de aceptación muy alta',
      'Pide su opinión sincera para quitar la presión de compra'
    ]
  },
  {
    id: 'script-evento-liderazgo-seminario',
    category: 'evento_presencial',
    title: 'Invitación a Seminario Magistral con Líderes Internacionales',
    targetAudience: 'Emprendedores, profesionales y personas con mentalidad de éxito',
    context: 'Evento especial con líderes de rango Diamante o directivos de la empresa',
    message: `¡Hola [Nombre]! Te contacto porque sé que te apasiona el crecimiento personal y los negocios de alto impacto. 💎

Este [Fecha] tendremos en [Ciudad / Hotel / Auditorio] la visita especial de líderes internacionales de **HGW** en el **Seminario de Liderazgo y Expansión 2026**. 🌎🚀

Se revelarán las estrategias de cómo posicionarse en la apertura de nuevos mercados en Latinoamérica y el sistema para construir ingresos residuales de 4 a 5 cifras mensuales.

Tengo únicamente 2 entradas VIP de cortesía para personas de mi círculo de confianza. ¿Te gustaría acompañarme? 🎫🔥`,
    tips: [
      'Edifica a los oradores y la exclusividad de los boletos VIP',
      'Confirma la asistencia 24 horas antes del evento'
    ]
  },
  {
    id: 'script-evento-salud-preventiva',
    category: 'evento_presencial',
    title: 'Invitación a Conferencia de Salud y Longevidad Celular',
    targetAudience: 'Personas interesadas en medicina natural, nutrición y prevención',
    context: 'Charla de salud dictada por especialistas o terapeutas del equipo',
    message: `¡Hola [Nombre]! Quería compartirte una invitación muy valiosa. 🌿

Este [Día] a las [Hora] se llevará a cabo la conferencia presencial: **"Secretos de la Medicina Botánica y Longevidad Celular: Arándanos, Ganoderma y Turmalina"**. 🔬🫐

Aprenderás cómo desintoxicar tu organismo, prevenir problemas de visión y aliviar dolores articulares sin químicos invasivos.

La entrada es libre con registro previo. ¿Te gustaría que te anote en la lista de invitados para apartar tu lugar? 📋✨`,
    tips: [
      'Enfócate 100% en la educación en salud y bienestar',
      'Ideal para personas mayores de 40 años o profesionales de la salud'
    ]
  },
  {
    id: 'script-evento-recordatorio-dia-mismo',
    category: 'evento_presencial',
    title: 'Recordatorio el Mismo Día del Evento Presencial',
    targetAudience: 'Personas que confirmaron su asistencia previamente',
    context: 'Enviar 3 horas antes del inicio del evento para asegurar asistencia',
    message: `¡Hola [Nombre]! 👋 Paso a recordarte nuestro evento de hoy a las [Hora] en [Dirección / Oficina HGW]. 🏢

📍 Recuerda:
• Llegar 10-15 minutos antes para tener un buen asiento en las primeras filas.
• Al ingresar en recepción, indica que vienes invitado(a) por **[Tu Nombre / Tu Código de Socio]**.

¡Nos vemos en un rato para saludarte en persona y disfrutar un rico café! ☕🎉`,
    tips: [
      'Indica claramente la dirección exacta y referencias de ubicación',
      'Recuérdale mencionar tu nombre en la recepción'
    ]
  },

  // ==========================================
  // 6. INVITACIÓN A ZOOM (5 SCRIPTS)
  // ==========================================
  {
    id: 'script-zoom-presentacion-oficial-noche',
    category: 'invitacion_zoom',
    title: 'Invitación a la Presentación Central de Negocio por Zoom (Noche)',
    targetAudience: 'Prospectos que quieren conocer la oportunidad desde casa',
    context: 'Conectar prospectos a la sala central de Zoom del equipo (8:00 PM)',
    message: `¡Hola [Nombre]! Espero que estés teniendo una excelente tarde. 🌙

Hoy a las **8:00 PM (Hora de [Tu País])** tendremos una presentación virtual en vivo por **Zoom** donde explicaremos en 35 minutos:
1️⃣ Qué es HGW y por qué está creciendo tanto en 13 países. 🌎
2️⃣ Cómo funciona el catálogo de productos de consumo masivo. ☕🫐
3️⃣ Cómo ganar el 50% con el Plan Ganancia Mutua trabajando desde tu celular. 💵

La sala tiene cupos limitados por capacidad. ¿Te gustaría que te reserve un enlace de acceso para que te conectes desde la comodidad de tu casa? 💻📲`,
    tips: [
      'Menciona la hora exacta ajustada al país de tu prospecto',
      'Pide confirmación antes de enviar el link directo'
    ]
  },
  {
    id: 'script-zoom-amigos-privado',
    category: 'invitacion_zoom',
    title: 'Invitación a Zoom Privado 1 a 1 o Grupo Reducido',
    targetAudience: 'Amigos cercanos, familiares o contactos de alta confianza',
    context: 'Reunión privada para responder preguntas con mayor cercanía',
    message: `¡Hola [Nombre]! 👋 Quería invitarte a una videollamada corta por Zoom de 20 minutos mañana.

Quiero mostrarte personalmente el proyecto en el que estoy trabajando con HGW y responder cualquier pregunta que tengas con total transparencia. 💡

No hay ningún compromiso de compra ni afiliación, solo me importa compartirte la información porque sé que tienes talento y visión. 🤝

¿Qué horario te queda más cómodo: en la mañana a las [Hora 1] o en la tarde a las [Hora 2]? 📲`,
    tips: [
      'La llamada personalizada genera mucha más confianza y conversión',
      'Muestra la pantalla con diapositivas claras y testimonios'
    ]
  },
  {
    id: 'script-zoom-webinar-salud-detox',
    category: 'invitacion_zoom',
    title: 'Invitación a Webinar de Salud Visual y Limpieza de Colon',
    targetAudience: 'Prospectos interesados en bienestar, pérdida de peso o salud ocular',
    context: 'Webinar enfocado en testimonios de salud y beneficios de productos',
    message: `¡Hola [Nombre]! 🌿 Este [Día] a las [Hora] tendremos un Webinar Especial por Zoom: **"Claves Naturales para Desintoxicar el Colon y Recuperar tu Visión"**. 🫐✨

Especialistas en nutrición compartirán:
✅ Por qué el 80% de los problemas de fatiga y piel inician en el intestino.
✅ Cómo las antocianinas del arándano protegen la retina de la luz azul de pantallas.
✅ Testimonios en vivo de personas que recuperaron su vitalidad.

El acceso es 100% gratuito. ¿Te paso el link de la sala para que te conectes? 📲💻`,
    tips: [
      'Enfócate en la solución médica y natural a los problemas comunes',
      'Excelente para personas que no quieren escuchar de negocios pero sí de salud'
    ]
  },
  {
    id: 'script-zoom-recordatorio-15-minutos',
    category: 'invitacion_zoom',
    title: 'Recordatorio Urgente: 15 Minutos para Iniciar el Zoom',
    targetAudience: 'Personas que confirmaron que entrarían al Zoom',
    context: 'Enviar 15 a 20 minutos antes de que empiece la transmisión',
    message: `¡Hola [Nombre]! 👋 ¡Estamos a solo 15 minutos de abrir la sala de Zoom! ⏳🚀

📲 Aquí tienes tu enlace directo para ingresar:
🔗 **[Pegar Enlace de Zoom]**
🆔 ID de Reunión: [Número de ID]
🔑 Código de Acceso: [Contraseña]

💡 Te recomiendo conectarte unos minutos antes para asegurar tu lugar en la sala. ¡Nos vemos adentro! 🎉`,
    tips: [
      'Envía los datos de acceso limpios y legibles',
      'Escríbele un saludo privado por el chat de Zoom cuando lo veas conectado'
    ]
  },
  {
    id: 'script-zoom-sala-abierta-ahora',
    category: 'invitacion_zoom',
    title: 'Aviso de "Sala Abierta Ahora Mismo" para Rezagados',
    targetAudience: 'Prospectos que no han entrado pasados 2 minutos del inicio',
    context: 'Mensaje rápido con sentido de oportunidad cuando la sala ya está transmitiendo',
    message: `¡[Nombre], ya abrimos la sala y está llena de personas de toda Latinoamérica! 🔥

Están explicando justo ahora cómo funciona el modelo de negocio y los productos. ¡Todavía alcanzas a entrar! 🏃‍♂️💨

👉 **Entra directo aquí:** [Enlace de Zoom]

¡Te espero adentro! 💻✨`,
    tips: [
      'Transmite dinamismo y prisa positiva',
      'No envíes más de un mensaje si no entra, respeta su decisión'
    ]
  }
];

export const scriptCategories = [
  { id: 'todos', label: 'Todos los Scripts (30)', icon: 'Sparkles' },
  { id: 'bienvenida', label: '🎉 Bienvenida (5)', icon: 'Smile' },
  { id: 'presentacion', label: '🎙️ Presentación (5)', icon: 'Send' },
  { id: 'seguimiento', label: '🔄 Seguimiento (5)', icon: 'Clock' },
  { id: 'cierre', label: '🎯 Cierre (5)', icon: 'CheckCircle' },
  { id: 'evento_presencial', label: '🏢 Eventos Presenciales (5)', icon: 'MapPin' },
  { id: 'invitacion_zoom', label: '💻 Invitación a Zoom (5)', icon: 'Video' }
] as const;
