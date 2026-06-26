export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  readingTime: number;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "como-economizar-na-passagem-de-onibus",
    title: "Como economizar na passagem de ônibus: 10 dicas práticas",
    description:
      "Descubra estratégias para pagar menos em passagens de ônibus no Brasil, desde antecedência na compra até escolha de horários.",
    excerpt:
      "Comprar passagem de ônibus com antecedência, viajar em dias de semana e comparar preços entre plataformas pode reduzir o custo em até 40%.",
    datePublished: "2025-03-15",
    dateModified: "2025-06-01",
    category: "Economia",
    readingTime: 6,
    content: [
      "A passagem de ônibus é uma das formas mais econômicas de viajar pelo Brasil, mas os preços variam bastante dependendo de quando e como você compra. Com algumas estratégias simples, é possível economizar significativamente.",
      "A primeira dica é comprar com antecedência. Em geral, comprar entre 7 e 21 dias antes da viagem oferece os melhores preços. Passagens compradas no dia da viagem podem custar até 50% mais.",
      "Viajar em dias de semana (terça, quarta e quinta) costuma ser mais barato que em fins de semana e feriados. Empresas ajustam preços conforme a demanda, e dias de menor movimento têm tarifas reduzidas.",
      "Compare preços em diferentes plataformas. ClickBus, Buscapé e sites das empresas podem ter preços diferentes para a mesma viagem. Vale dedicar alguns minutos para comparar.",
      "Considere viagens noturnas. Além de economizar uma diária de hotel, passagens noturnas frequentemente têm preços menores. O ônibus leito oferece conforto para dormir durante a viagem.",
      "Fique atento a promoções sazonais. Black Friday, aniversário de empresas e campanhas de fim de ano podem oferecer descontos de 20% a 40%.",
      "Programas de fidelidade de algumas empresas e plataformas acumulam pontos que podem ser convertidos em descontos em viagens futuras.",
      "Evite temporadas de alta demanda quando possível: feriados prolongados, férias escolares de julho e dezembro, e eventos como Carnaval e Réveillon.",
      "Opte por poltronas convencionais em vez de executivo ou leito quando o conforto extra não é essencial. A diferença de preço pode ser de 30% a 60%.",
      "Use o comparador de preços do Valor da Passagem para verificar o preço médio da rota antes de comprar, e identificar se o preço oferecido está acima ou abaixo do normal.",
    ],
  },
  {
    slug: "diferenca-entre-convencional-executivo-e-leito",
    title: "Convencional, executivo ou leito: qual a diferença?",
    description:
      "Entenda as diferenças entre os tipos de serviço em passagens de ônibus: convencional, executivo, semi-leito e leito.",
    excerpt:
      "Cada classe de serviço oferece diferentes níveis de conforto e preço. Saiba qual escolher para sua viagem.",
    datePublished: "2025-04-02",
    category: "Guia",
    readingTime: 5,
    content: [
      "Ao comprar uma passagem de ônibus, você encontrará diferentes classes de serviço. Entender as diferenças ajuda a escolher a opção ideal para sua viagem e orçamento.",
      "O serviço convencional é o mais básico e econômico. As poltronas têm reclinação limitada (cerca de 120°), espaço padrão entre assentos e ar-condicionado. Ideal para viagens curtas (até 4 horas).",
      "O executivo oferece poltronas com maior reclinação (cerca de 140°), mais espaço entre assentos, apoio para pernas e, em muitos casos, tomadas USB e Wi-Fi. Bom para viagens de 4 a 8 horas.",
      "O semi-leito tem poltronas que reclinam bastante (cerca de 160°), com apoio para pernas e mais espaço. É uma opção intermediária entre executivo e leito, ideal para viagens de 6 a 10 horas.",
      "O leito oferece a máxima reclinação (cerca de 180°), permitindo deitar quase completamente. Inclui apoio para pernas, travesseiro e, em alguns casos, lanche. Recomendado para viagens longas (mais de 8 horas).",
      "A diferença de preço entre convencional e leito pode ser de 50% a 100%. Para viagens curtas, o convencional geralmente é suficiente. Para viagens noturnas longas, o leito vale o investimento.",
      "Não todas as empresas oferecem todas as classes em todas as rotas. Verifique as opções disponíveis na plataforma de compra antes de decidir.",
    ],
  },
  {
    slug: "documentos-necessarios-viagem-onibus",
    title: "Documentos necessários para viajar de ônibus no Brasil",
    description:
      "Lista completa de documentos aceitos para embarque em viagens de ônibus interestaduais no Brasil, incluindo menores de idade.",
    excerpt:
      "Saiba quais documentos são aceitos para embarcar em ônibus interestaduais e o que é necessário para menores de idade.",
    datePublished: "2025-04-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Para viajar de ônibus em rotas interestaduais no Brasil, é obrigatório apresentar documento de identificação com foto no embarque. Sem documento, o passageiro não pode embarcar.",
      "Documentos aceitos para adultos: RG (cédula de identidade), CNH (Carteira Nacional de Habilitação), passaporte, carteira de trabalho (versão física com foto) e certificado de reservista.",
      "Para menores de idade viajando com os pais: apresentar RG ou certidão de nascimento do menor, junto com documento dos pais.",
      "Menores viajando sem os pais precisam de autorização judicial ou documento de autorização assinado pelos pais com firma reconhecida, além do documento do menor.",
      "A compra online geralmente exige o número do documento do passageiro. O documento apresentado no embarque deve ser o mesmo cadastrado na compra.",
      "Imprimir ou salvar o bilhete eletrônico (e-ticket) no celular é recomendado, embora muitas empresas aceitem apenas o número do bilhete e o documento.",
      "Para viagens internacionais (ex: Brasil-Argentina), o passaporte é obrigatório, junto com documentos exigidos pelo país de destino.",
    ],
  },
  {
    slug: "melhores-terminais-rodoviarios-brasil",
    title: "Os melhores terminais rodoviários do Brasil",
    description:
      "Conheça os principais terminais rodoviários do Brasil: localização, infraestrutura e como chegar em cada um.",
    excerpt:
      "Terminais como Tietê (SP), Novo Rio (RJ) e Rodoviária de BH são hubs essenciais para viagens de ônibus no Brasil.",
    datePublished: "2025-05-10",
    category: "Destinos",
    readingTime: 7,
    content: [
      "Os terminais rodoviários são o ponto de partida e chegada de milhões de viagens de ônibus no Brasil. Conhecer a infraestrutura e localização dos principais terminais facilita sua viagem.",
      "Terminal Rodoviário Tietê (São Paulo): o maior e mais movimentado do Brasil, com mais de 60 mil passageiros diários. Localizado na zona norte, acesso fácil pelo metrô (Estação Portuguesa-Tietê, linha azul).",
      "Terminal Rodoviário Novo Rio (Rio de Janeiro): principal terminal do RJ, na zona norte, com acesso pelo metrô (Estação São Cristóvão). Oferece serviços de lanchonetes, farmácia e Wi-Fi.",
      "Terminal Rodoviário de Belo Horizonte: localizado no centro da cidade, com fácil acesso ao metrô e transporte público. Terminal moderno com boa infraestrutura.",
      "Terminal Rodoviário de Curitiba: na região central, próximo ao Shopping Estação. Bem organizado e com boa variedade de serviços.",
      "Terminal Rodoviário de Brasília: no Setor de Diversões, com acesso por transporte público. Terminal amplo com muitas opções de empresas.",
      "Dicas gerais: chegue com pelo menos 30 minutos de antecedência para embarque. Verifique o guichê e plataforma no bilhete. Terminais grandes têm mapas e totens de informação.",
    ],
  },
  {
    slug: "o-que-acontece-se-eu-perder-o-horario-do-onibus",
    title: "O Que Acontece Se Eu Perder o Horário do Ônibus?",
    description:
      "Saiba o que fazer se perder o horário do ônibus: validade do bilhete, remarcação, taxas da ANTT e como solicitar reembolso.",
    excerpt:
      "Perdeu o horário? A passagem tem validade de um ano e você pode remarcar ou pedir reembolso — veja as regras da ANTT.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Perdeu o horário? Respira fundo — a situação tem solução e a lei está do seu lado.",
      "De acordo com as regras da Agência Nacional de Transportes Terrestres (ANTT), o bilhete de passagem tem validade de um ano a partir da data de emissão. Isso significa que, mesmo que você perca o embarque, sua passagem não vai para o lixo.",
      "O passageiro pode solicitar a remarcação da viagem para outra data e horário, de acordo com a disponibilidade da empresa. O ponto de atenção está no prazo: se a remarcação for feita com menos de 3 horas de antecedência em relação ao horário original, ou se o passageiro simplesmente não comparecer ao embarque, a transportadora pode cobrar uma taxa de até 20% do valor da tarifa.",
      "Portanto, se souber com antecedência que não vai conseguir embarcar, entre em contato com a empresa o quanto antes para remarcar sem custo. E se quiser desistir completamente da viagem, também é possível solicitar o reembolso — desde que o avise com pelo menos 3 horas de antecedência do horário de saída.",
      "Dica prática: guarde sempre o bilhete (físico ou digital) e o comprovante de compra. Na dúvida, ligue para a central da empresa ou dirija-se ao guichê do terminal.",
    ],
  },
  {
    slug: "beneficios-para-pcd-em-viagens-de-onibus",
    title: "Benefícios para PCD em Viagens de Ônibus: O Que Diz a Lei?",
    description:
      "Conheça os direitos de pessoas com deficiência no transporte rodoviário interestadual: Passe Livre, quem tem direito, como solicitar e como usar nas viagens.",
    excerpt:
      "Pessoas com deficiência têm direito ao Passe Livre interestadual. Saiba quem pode solicitar, documentos necessários e como usar o benefício.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 5,
    content: [
      "Pessoas com deficiência têm direitos importantes garantidos por lei no transporte rodoviário interestadual. Conheça o principal deles: o Passe Livre.",
      "O que é o Passe Livre Interestadual? Instituído pela Lei nº 8.899/1994 e regulamentado pelo Decreto nº 3.691/2000, o Passe Livre é um programa do Governo Federal que garante gratuidade nas passagens de ônibus interestadual (além de trem e barco) para pessoas com deficiência comprovadamente carentes.",
      "Quem tem direito? Pessoas com deficiência física, mental, visual, auditiva, doença renal crônica ou ostomia, desde que a renda familiar per capita seja de até um salário mínimo.",
      "Como solicitar? O pedido é feito pelo portal gov.br, de forma 100% digital. Os documentos necessários são: documento de identificação com foto; atestado ou laudo médico assinado por especialista, comprovando a deficiência; e comprovante de renda familiar. Após a aprovação, a credencial é enviada ao beneficiário. A renovação pode ser feita a cada três anos.",
      "Como usar nas viagens? Basta apresentar a carteira do Passe Livre junto com um documento de identidade no guichê de passagens, com pelo menos 3 horas de antecedência. Cada ônibus é obrigado a reservar 2 assentos para beneficiários do Passe Livre — e, havendo mais vagas disponíveis, a empresa não pode negar o embarque.",
      "Se a empresa se recusar a conceder o benefício, ela é obrigada a emitir um documento informando data, hora, local e motivo da recusa. Nesse caso, registre uma reclamação junto à ANTT pelo telefone 166.",
      "Atenção: a gratuidade vale apenas para o serviço convencional de ônibus. Não se aplica a serviços executivo, leito ou semi-leito.",
    ],
  },
  {
    slug: "bebe-paga-passagem-de-onibus",
    title: "Bebê Paga Passagem de Ônibus? O Que Diz a Lei",
    description:
      "Criança pequena precisa de passagem de ônibus? Saiba o que diz a ANTT sobre gratuidade para bebês e crianças até 5 anos em viagens interestaduais.",
    excerpt:
      "Bebês e crianças até 5 anos incompletos não pagam passagem no colo do responsável. A partir dos 6 anos, a poltrona é obrigatória.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Uma dúvida muito comum entre famílias que planejam viagens: criança pequena precisa de passagem? A resposta é não — até certa idade.",
      "Segundo as regras da ANTT para o transporte interestadual, crianças com até 5 anos de idade incompletos (menos de 6 anos) têm direito à gratuidade, desde que viajem na mesma poltrona do responsável. Ou seja, o bebê ou a criança pequena fica no colo do adulto acompanhante, sem ocupar um assento separado.",
      "A partir dos 6 anos, a criança já precisa de passagem própria e tem direito a uma poltrona individual.",
      "E se os pais quiserem um assento separado para o bebê? Nesse caso, é necessário adquirir uma passagem normalmente para a poltrona extra, mesmo que a criança ainda seja bebê. A gratuidade só é garantida quando a criança viaja no colo do responsável.",
      "Dica para viagens com crianças: leve sempre a certidão de nascimento ou outro documento que comprove a idade da criança; confirme as regras com a empresa no momento da compra, pois algumas viações podem ter políticas complementares; e, em caso de dúvidas ou negativa injustificada, acione a ANTT pelo telefone 166.",
    ],
  },
  {
    slug: "atraso-superior-a-1-hora-quais-sao-meus-direitos",
    title: "Atraso Superior a 1 Hora: Quais São Meus Direitos?",
    description:
      "Saiba o que a ANTT garante ao passageiro em caso de atraso de ônibus superior a 1 hora: remarcação, troca de empresa, reembolso e alimentação.",
    excerpt:
      "Atraso de mais de 1 hora no ônibus? Você pode aguardar, trocar de empresa ou pedir reembolso integral. Veja todos os direitos.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Atraso é uma das situações mais frustrantes para quem viaja. Mas saiba que a lei estabelece direitos claros para o passageiro quando isso acontece.",
      "A partir de 1 hora de atraso: quando o ônibus atrasa mais de uma hora — seja no ponto de partida ou em uma parada ao longo do trajeto —, o passageiro pode escolher entre três opções: aguardar e continuar a viagem normalmente quando o ônibus sair; embarcar em outro ônibus de empresa equivalente, com o mesmo destino, sem custo adicional; ou desistir da viagem e receber de volta o valor integral da passagem imediatamente.",
      "A partir de 3 horas de atraso (por responsabilidade da empresa): se o atraso for superior a 3 horas e a responsabilidade for da transportadora, o passageiro tem direito a alimentação fornecida pela empresa e hospedagem, se necessário (por exemplo, caso o ônibus só saia no dia seguinte).",
      "O que fazer na prática? Guarde o bilhete e anote o horário previsto e o real de saída. Solicite à empresa uma declaração por escrito do atraso. Se seus direitos não forem respeitados, registre reclamação na ANTT pelo telefone 166 ou pelo site oficial.",
      "Importante: a ANTT exige que o serviço seja prestado com pontualidade desde o início até o destino final. O atraso sem justificativa pode gerar penalidades para a empresa.",
    ],
  },
  {
    slug: "o-que-acontece-se-a-viagem-for-interrompida-durante-o-trajeto",
    title: "O Que Acontece Se a Viagem For Interrompida Durante o Trajeto?",
    description:
      "Pane, acidente ou problema na estrada: saiba o que a empresa deve fazer e quais são os direitos do passageiro quando a viagem de ônibus é interrompida.",
    excerpt:
      "Viagem interrompida no meio do caminho? A empresa deve prestar assistência, oferecer outro veículo ou reembolso proporcional.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 4,
    content: [
      "Pane mecânica, acidente, problema na estrada… Situações inesperadas podem interromper uma viagem no meio do caminho. E aí, o que acontece com o passageiro?",
      "A legislação é clara: a empresa de transporte tem a obrigação de prestar assistência imediata, eficiente e adequada em caso de qualquer interrupção durante o trajeto.",
      "O que a empresa é obrigada a fazer: providenciar outro veículo para dar continuidade à viagem o mais rápido possível; fornecer assistência aos passageiros enquanto aguardam — incluindo alimentação e, se necessário, acomodação; e, em caso de acidente com vítimas, acionar os serviços de emergência e prestar o suporte necessário.",
      "E se o passageiro não quiser esperar? Se a interrupção for prolongada e o passageiro optar por não aguardar, ele pode desistir da viagem e exigir o reembolso proporcional ao trecho não percorrido.",
      "Bagagens e pertences: se a viagem for interrompida, a empresa também é responsável pela guarda e transporte das bagagens até o destino final ou até a devolução ao passageiro.",
      "Como acionar seus direitos: guarde todos os comprovantes (bilhete, fotos, declarações da empresa); exija da empresa um posicionamento por escrito sobre a situação; e, em caso de descumprimento, registre ocorrência na ANTT (telefone 166) ou no Procon de sua cidade.",
    ],
  },
  {
    slug: "posso-viajar-de-onibus-com-animal-de-estimacao",
    title: "Posso Viajar de Ônibus com Animal de Estimação?",
    description:
      "Saiba as regras da ANTT para viajar de ônibus com cães e gatos: documentação, caixa de transporte, limites de peso e políticas das empresas.",
    excerpt:
      "Sim, é possível viajar com pet no ônibus interestadual. Veja documentos exigidos, condições de transporte e regras para cão-guia.",
    datePublished: "2026-03-20",
    category: "Guia",
    readingTime: 5,
    content: [
      "Boa notícia para quem não quer deixar o pet para trás: sim, é possível viajar de ônibus com animais de estimação — mas existem regras importantes a seguir.",
      "Regras gerais da ANTT para viagens interestaduais: animais permitidos são cães e gatos de pequeno porte, com até 10 kg.",
      "Documentação obrigatória: Atestado Sanitário para Trânsito de Cães e Gatos, emitido por veterinário credenciado ao CRMV, com no máximo 10 dias de antecedência em relação à viagem; e carteira de vacinação atualizada, com destaque para a vacina antirrábica e a polivalente.",
      "Condições de transporte: o animal deve viajar dentro de uma caixa de transporte rígida (fibra de vidro ou material similar), de tamanho adequado. O recipiente deve ficar no interior do ônibus, próximo ao passageiro — nunca no bagageiro. Em geral, é necessário comprar uma passagem para o animal, que ocupa a poltrona ao lado do tutor. Algumas empresas limitam a 1 animal por passageiro e no máximo 2 por viagem.",
      "Atenção às regras de cada empresa: as normas da ANTT estabelecem o mínimo obrigatório, mas cada viação pode ter exigências complementares — como sedação do animal, tamanho máximo da caixa de transporte ou políticas específicas de reserva. Consulte sempre a empresa antes de comprar a passagem.",
      "E o cão-guia? O cão-guia, que acompanha pessoas com deficiência visual, tem regras específicas e diferenciadas. Ele pode viajar sem caixa de transporte e sem custo adicional, desde que apresentada a documentação comprobatória.",
      "Onde comprar a passagem com pet? A compra de passagem para viagens com animais geralmente deve ser feita presencialmente no guichê da empresa, para controle e identificação. Verifique com antecedência!",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export const postCategories = [
  "Economia",
  "Guia",
  "Destinos",
] as const;
