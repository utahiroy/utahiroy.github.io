/**
 * Japanese content for /ja/* pages.
 * Work 系は LinkedIn 日本語版 (linkedin-revamp) を正本にし、
 * Thought は beliefs、Hobby / Beyond Work は本人メモを典拠にする。
 */

import { sections as enSections, type PhotoSection } from "./photography";

/* ── サイト共通 ── */

export const siteJa = {
  name: "Utahiro Yoshimoto",
  tagline: "仕事は気候変動、興味はそれ以外ぜんぶ。",
  intro:
    "アスエネのサステナビリティコンサルタントです。仕事の外では、Sony α7と湖と古い街並み。",
  description:
    "吉本詩宏（Utahiro Yoshimoto）。アスエネのサステナビリティコンサルタントで、ESG格付け、ESGデータ、AIに取り組んでいます。東京在住。Sony α7で写真を撮っています。",
};

export const navJa = [
  { label: "プロフィール", href: "/ja/profile" },
  { label: "仕事", href: "/ja/work" },
  { label: "写真", href: "/ja/photography" },
  { label: "趣味", href: "/ja/hobby" },
  { label: "思想", href: "/ja/thought" },
];

export const homeJa = {
  aboutSub:
    "東京在住。日本の気候テック企業アスエネで働いています。米国で環境科学を学びました。最近は移行金融に関心があります。",
  photoStrip: "写真: このサイトの写真はすべて 1 台の Sony α7 で撮っています →",
  photoStripLabel: "α7 より",
  explore: [
    {
      title: "プロフィール",
      description: "東京、その前は米国で環境科学。背景と価値観と働き方。",
      href: "/ja/profile",
    },
    {
      title: "仕事",
      description: "サステナビリティのコンサルティング、ESGデータ、AI。経歴、スキル、方向性。",
      href: "/ja/work",
    },
    {
      title: "写真",
      description: "Sony α7 で撮るストリートと旅。アタカマ砂漠から上海まで。",
      href: "/ja/photography",
    },
    {
      title: "趣味",
      description: "DJ、湖、旅、食、歴史の街歩き。仕事の外側の自分。",
      href: "/ja/hobby",
    },
    {
      title: "思想",
      description: "サステナビリティ、AI、生き方について、実際に持っている立場。",
      href: "/ja/thought",
    },
  ],
  nowTitle: "いま取り組んでいること",
  nowItems: [
    "アスエネのサステナビリティコンサルタントとして、企業のESG格付けへの対応を支援する。",
    "サプライチェーン事業部で、ESGデータ、セキュリティ、AIの事業企画を担う。",
    "Sony α7 でストリートと旅の写真を撮り、考えていることを文章に残す。",
  ],
  connect: "連絡はこちらのプラットフォームからどうぞ。",
};

/* ── プロフィール ── */

export const profileJa = {
  headline: "私について",
  summary:
    "アスエネのサステナビリティコンサルタントです。軸は一つ、CO2を早く、大きく削減することです。",
  portraitCaption: "東京・丸の内。LinkedIn と同じ 1 枚です。",
  portraitAlt: "東京・丸の内に立つ吉本詩宏",
  background: {
    title: "背景",
    paragraphs: [
      "日本で育ち、米国の大学で環境科学を専攻し、GISを副専攻にしました。2026年に東京へ戻りました。",
      "2024年からE4G、続いてアスエネで、ESGの調査、データ、格付けと、それを支えるAIの自動化に取り組んできました。",
    ],
  },
  values: {
    title: "価値観",
    items: [
      {
        name: "報酬より目的",
        description:
          "受け身の役割は選んできませんでした。何に取り組むかを決めるのは目的 (CO2 削減) であって、その逆ではありません。",
      },
      {
        name: "No.1 より Only 1",
        description:
          "単一の軸で競うより、環境科学とコンサルティングと AI 実装という、自分ならではの組み合わせをつくる方を選びます。",
      },
    ],
  },
  approach: {
    title: "働き方",
    items: [
      {
        name: "先に宣言して、行動を追いつかせる",
        description:
          "大きな目標は、現実味が出る前に口に出します。宣言すると自分の行動がそこへ向かって再編成されることを、経験として知っているからです。",
      },
      {
        name: "早く始めて、数を打つ",
        description:
          "今日がいちばん若い日です。少数の慎重な試行より多数の実験を選び、「見た・聞いた」より「触った・経験した」を積み重ねます。",
      },
      {
        name: "構造化してから自動化する",
        description:
          "自動化の前に、専門家の手作業を言語化して構造を与えます。土台が整っているから、AI が繰り返しの部分を引き受けられます。",
      },
      {
        name: "顧客の隣に座る",
        description:
          "課題を顧客の言葉で理解し、それを解く仕組みを最後まで作りたい。壁の向こうに問題を投げ渡す働き方はしません。",
      },
    ],
  },
  life: {
    title: "仕事の外側",
    paragraphs: [
      "拠点は日本です。米国での年月は大切で、これからも英語を使い、旅を続け、海外の友人とのつながりも保ちます。ただ、日常と家族の暮らしの中心は日本に置き、定期的に外へ出る形が自分に合っています。",
      "長期的には、都市への接続を切らずに、日常を自然へ近づけたいと考えています。湖の近くの少し広い家、窓から見える水辺と山、家族、できればボート。それでいて都市にもすぐ出られる暮らしです。",
      "場所も機材も食事も、ルールは同じです。細かく調べたうえで、行って、使って、食べてから判断する。そして一つの趣味を極めるより、興味をつなげて楽しみます。湖畔の町を旅すれば、その土地の歴史を知り、その日の魚を味わい、帰り道のプレイリストを選ぶことになります。",
    ],
  },
  outlook: {
    title: "向かう先",
    description:
      "専門家の判断を言葉にし、繰り返しの作業をAIエージェントに任せ、最終の判断はコードで行う。そういうサステナビリティの仕事の形を作りたいと考えています。最近は移行金融にも関心があります。",
  },
  glance: {
    title: "ひと目で",
    items: [
      { label: "拠点", value: "東京" },
      { label: "役割", value: "サステナビリティコンサルタント、事業企画 @ アスエネ" },
      { label: "学位", value: "環境科学 B.S. (副専攻 GIS)" },
      { label: "言語", value: "日本語 (母語)、英語" },
      { label: "方向性", value: "AIエージェントを生かしたサステナビリティの仕事" },
    ],
  },
};

/* ── 仕事 ── */

export const workJa = {
  headline: "仕事",
  summary:
    "アスエネで、サステナビリティのコンサルティング、ESGデータ、サプライチェーンのセキュリティ、AIに取り組んでいます。",
  experience: [
    {
      role: "サステナビリティコンサルタント",
      organization: "アスエネ株式会社",
      period: "2026-10〜現在",
      description: "サステナビリティコンサルティング本部ストラテジーG",
      highlights: [
        "企業のESG格付けへの対応を、ギャップ分析から改善計画まで支援",
        "格付けで繰り返す作業の道具を作り、採点はコードで行う",
      ],
      tags: ["ESG格付け", "サステナビリティコンサルティング"],
    },
    {
      role: "事業企画",
      organization: "アスエネ株式会社",
      period: "2026-10〜現在",
      description: "アスエネサプライチェーン事業部",
      highlights: [
        "ESGデータ：公開の開示書類から集めたESGと排出量のデータを提供",
        "サプライチェーンのセキュリティ：取引先から求められるサイバーセキュリティ評価への対応を支援",
        "AI：自動化する業務を選び、エンジニアと本番の運用まで実装",
      ],
      tags: ["ESGデータ", "セキュリティ", "AI"],
    },
    {
      role: "サステナビリティとAI自動化（インターン）",
      organization: "アスエネ株式会社",
      period: "2024-11〜2026-09",
      description: "サプライチェーン事業部",
      highlights: [
        "企業のESGと排出量のデータを分析し、開示と格付けの基準に対応づけ",
        "企業のESG格付けと開示への対応を、ギャップ分析から改善計画まで支援",
        "コンサルティングの業務を、LLMとAIエージェントで試作から本番まで自動化",
      ],
      tags: ["ESGデータ", "ESG格付け", "LLMとエージェント"],
    },
    {
      role: "リサーチャー（インターン）",
      organization: "環境エネルギー政策研究所（ISEP）",
      period: "2024-05〜2025-04",
      description: "再生可能エネルギー政策の調査。",
      highlights: [],
      tags: ["再生可能エネルギー", "エネルギー政策"],
    },
    {
      role: "リサーチャー（インターン）",
      organization: "E4G",
      period: "2024-04〜2024-11",
      description: "東京大学発のスタートアップ（2024年にアスエネが買収）で、ESGと市場を調査。",
      highlights: [],
      tags: ["ESG", "市場調査"],
    },
  ],
  mvv: {
    label: "アスエネ MVV",
    title: "このミッションのもとで働いています",
    note:
      "文化を我慢して入った会社ではなく、文化込みで好きで選んだ会社です。10 のバリューのうち特に自分を動かしているのは「“圧倒的”当事者意識」「即レス徹底 スピードが最大の武器」「AI に全振り」の 3 つで、もともと自分がそう働きたかった形そのものでした。そしてミッションは、自分の軸を会社の言葉にしたものだと思っています。",
    valuesJa: [
      "“圧倒的”当事者意識",
      "誠実に相手目線に立つ",
      "即レス徹底 スピードが最大の武器",
      "令和の生産性・効率化重視を徹底",
      "ワンアス -One for All, All for One-",
      "自責をもつ",
      "AI に全振り",
      "No.1 のその先の CATEGORY LEADER へ",
      "KAIZEN のために全てを計測しよう",
      "ポジティブに挑戦しよう",
    ],
  },
  education: {
    title: "学歴",
    items: [
      {
        school: "ウィスコンシン大学スペリオル校",
        program: "環境科学 B.S.、副専攻 GIS",
        note: "2026 年卒 · GPA 3.80",
      },
      {
        school: "ミネソタ大学",
        program: "National Student Exchange (NSE)、環境科学",
        note: "選抜制の交換留学プログラム (GPA + エッセイ)",
      },
    ],
  },
  areas: {
    title: "領域",
    items: [
      {
        name: "ESG格付け",
        description: "ギャップ分析と証憑の確認から、改善計画まで支援します。",
      },
      {
        name: "ESGデータと開示",
        description:
          "公開の開示書類から企業のESGと排出量のデータを集め、開示の基準に対応づけます。",
      },
      {
        name: "サプライチェーンのセキュリティ",
        description: "取引先から求められるサイバーセキュリティ評価への対応を支援します。",
      },
      {
        name: "サステナビリティ業務のAI活用",
        description:
          "専門家の判断を言葉にし、繰り返しの作業をAIエージェントに任せ、最終の判断はコードで行います。",
      },
      {
        name: "環境データとGIS",
        description:
          "環境データ分析と地理空間情報。自然のシステムと人間のシステムを同じモデルに載せます。",
      },
    ],
  },
  skillsTitle: "スキル",
  certificationsTitle: "資格",
  direction: {
    title: "いまの方向性",
    description:
      "専門家の判断を言葉にし、繰り返しの作業をAIエージェントに任せ、最終の判断はコードで行う。そういうサステナビリティの仕事の形を作りたいと考えています。最近は移行金融にも関心があります。",
  },
};

/* ── 趣味 ── */

export const hobbyJa = {
  headline: "楽しんでいること",
  summary:
    "分析中心の仕事とのバランスを取ってくれる関心事です。どれも単独では完結しません。旅は食の調査になり、歴史の街歩きになり、帰り道のプレイリストになります。",
  footer:
    "このページは写真と話とともに少しずつ増えていきます。いまは、仕事の外で何に注意を向けているかの地図です。",
  galleryLink: "ギャラリーを見る",
  hobbies: [
    {
      title: "写真",
      description:
        "立ち止まって注意を向けるための手段です。構図と光と、多くの人が素通りする細部に惹かれます。",
      details:
        "Sony α7 で撮るストリートと旅の写真が中心です。完璧な技術より、残す価値のある瞬間に気づくことを大事にしています。",
      image: {
        src: "/photos/suzhou-lantern-alley.jpg",
        alt: "蘇州の夕暮れ、提灯の並ぶ路地",
      },
      href: "/ja/photography",
    },
    {
      title: "DJ と音楽",
      description:
        "幅広く聴くことと、ミックスの練習。机の上には Pioneer の DJ コントローラと Yamaha のモニタースピーカーがあります。",
      details:
        "面白いのは曲のつなぎ目です。テンポと熱量が揃うと、聴き手が気づかないうちに場の空気が切り替わります。モニターは派手な低音ではなく正確さで選びました。機材は部屋と用途と予算に合わせて調べ抜いて、買って、実際に使います。いつか友人の集まりやバーでも自然に回せるようになりたいです。",
    },
    {
      title: "湖と自然",
      description:
        "自然の中でも特に湖に惹かれます。海とは違う静けさと、山と町と水辺が一つの視界に収まる景色が好きです。",
      details:
        "湖畔の地域を、交通、気候、冬の過ごしやすさ、日々の暮らしという軸で比べています。長期的な絵は、家族と住む水辺の家と、できればボート。それでいて都市にもすぐ出られる場所です。",
      image: {
        src: "/photos/hallstatt-lakefront.jpg",
        alt: "険しい山の麓の湖畔の村",
      },
    },
    {
      title: "旅",
      description:
        "都市、港町、温泉地、古い街並み。その場所がなぜ今の形になったのかを知るために、国内外を旅します。",
      details:
        "立ち寄り先は少なく、一つ一つを長く見ます。1 日で 10 の展望台を集めるより、一つの町をきちんと歩く方が好きです。災害から立ち直った地域が、その記憶をどう残し、どう再建したかにも関心があります。",
      image: {
        src: "/photos/machu-picchu.jpg",
        alt: "上から見たマチュピチュ",
      },
    },
    {
      title: "食と魚",
      description:
        "旅先は、そこで何を食べられるかで決まる部分があります。何より魚です。有名店より、漁港と市場と地元の食堂へ。",
      details:
        "旬、水揚げの港、調理法。食は、その土地の自然と産業と歴史へ入る最短の入口で、1 日の終わりのご褒美だけではありません。",
      image: {
        src: "/photos/shanghai-dumplings.jpg",
        alt: "蒸篭の小籠包",
      },
    },
    {
      title: "歴史と街歩き",
      description:
        "古い街並み、神社、城跡。それらをシステムとして読みます。この場所は何のためにあり、その何が今の町に残っているのか。",
      details:
        "年号や人名より機能に興味があります。城は大きな建物としてではなく、政治と行政の場として意味を持ちます。今の街の中に昔の構造を見つけるのが楽しいです。",
      image: {
        src: "/photos/temple-hall.jpg",
        alt: "金色の鴟尾をいただく寺院の堂",
      },
    },
    {
      title: "異文化交流",
      description:
        "日本と米国の両方で暮らして、違いを優劣で判断せず、違いのまま理解するようになりました。生活習慣、教育、人間関係、働き方。",
      details:
        "日本を訪れる人に説明するのが好きです。歴史ある城下町で海外からのツアーを案内した経験もあります。難しい言葉を使わず、その場所が大事な理由を一つか二つ、あとは自由に見る時間。前提を共有しない相手に説明すると、その場所の本当に大事な点が分かります。",
    },
    {
      title: "スポーツ",
      description:
        "観る側としてのスポーツ。戦略、流れの変わり目、構造と制約の中で生まれる物語が好きです。",
      details:
        "選手にも、その周りの組織にも要求される規律とシステム思考に敬意を持っています。",
    },
  ],
};

/* ── 思想 ── */

export const thoughtJa = {
  headline: "考えていること",
  summary:
    "いま自分が支持している考えです。中立な観察ではなく、一つ一つが主張で、それぞれに真剣に受け止めている反論があります。",
  footer:
    "どれも現時点の見解であって、確定した結論ではありません。より説得力のある議論に出会えば変わるものもあります。そのために書いています。",
  entries: [
    {
      title: "物理と制度は一つのシステム",
      date: "2026",
      excerpt:
        "サステナビリティの仕事が重要なのは、自然のシステムと人間のシステムが本当は一つだからです。排出量とエネルギーは、経済、政策、行動と同じモデルに載せるべきで、物理を変えるには制度を変えるしかありません。環境科学を学んだ自分がコンサルティングで働くのは、この二つを選ばないためです。",
      tags: ["サステナビリティ", "システム"],
    },
    {
      title: "サステナビリティのデータに構造を",
      date: "2026",
      excerpt:
        "ESG は年 1 回の静的な文書で回っています。直すべきは構造です。企業、排出量、開示、サプライチェーンの情報を結ぶオントロジーを置き、非構造の報告書は LLM がデータに変え、繰り返しの分析はエージェントが引き受ける。意思決定は昨年の表計算ではなく、実態を写した生きたモデルの上で行うべきです。",
      tags: ["AI", "オントロジー", "ESG"],
    },
    {
      title: "同じ AI が良くも悪くもする。決めるのは統治",
      date: "2026",
      excerpt:
        "AI の影響は技術そのものの性質ではありません。誰が持ち、何に向け、どう統治するかで決まります。私はそれを排出量と気候政策に向けたい。お金を動かすだけの側ではなく、価値を生む側の経済に立ちたいと考えています。",
      tags: ["AI", "統治"],
    },
    {
      title: "難しいのは実装",
      date: "2026",
      excerpt:
        "サステナビリティの枠組みは豊富にあります。足りないのは、それを実在の組織と実在の制約の中で機能する、構造化された再現可能なシステムに変える仕事です。ボトルネックは政策そのものであることは少なく、データとプロセスと人の行動を揃える実装の層にあります。",
      tags: ["実装", "システム"],
    },
    {
      title: "先に宣言する",
      date: "2026",
      excerpt:
        "大きな目標は、現実味が出る前に口に出すべきです。宣言は自慢ではなくコミットメントの装置で、口に出すと行動がそこへ向かって再編成されることを経験として知っています。だから宣言が先、行動が後。野心にはマイルストーンを添えて、説明のつくものにします。",
      tags: ["キャリア", "姿勢"],
    },
    {
      title: "「生き急いでる」は褒め言葉",
      date: "2026",
      excerpt:
        "物事は早く始める。今日がいちばん若い日です。少数の慎重な試行より多数の実験を回し、「見た・聞いた」より「触った・経験した」を積み上げる。急ぐことのリスクは実在します。燃え尽き、浅い学習、撤退の遅れ。それでもこの取引を選ぶのは、一次経験の量が他のすべての土台になるからです。",
      tags: ["姿勢", "学び"],
    },
    {
      title: "体験してから判断する",
      date: "2026",
      excerpt:
        "レビューもランキングもスペック表も出発点であって、結論ではありません。場所も機材も食事も、細かく調べたうえで、歩いて、使って、食べてから決めます。他の全員にとって最良の選択が、自分にとって最良とは限りません。",
      tags: ["判断", "体験"],
    },
    {
      title: "食はその土地を読む方法",
      date: "2026",
      excerpt:
        "旅先は、そこで人々が何を食べているかで決めます。特に魚です。有名店ではなく、港、市場、日常の食堂へ。旬、水揚げの港、調理法。食事をその地域の自然と産業と歴史への入口として扱うと、すべての昼食がフィールドワークになります。",
      tags: ["旅", "食"],
    },
    {
      title: "自論を大事にする。Street と Book のいいとこ取り",
      date: "2026",
      excerpt:
        "自分で立てた持論を大事にします。このページはその置き場所です。持論のつくり方も決めています。現場の知恵 (Street) と本の知恵 (Book) は対立する陣営ではなく、路上で確かめた理論と、先人の書いたもので整理した経験の、両方のいいとこ取りをしていきます。",
      tags: ["学び", "姿勢"],
    },
    {
      title: "味は上下ではなく 4 象限で",
      date: "2026",
      excerpt:
        "食べ物を「うまい/まずい」の一次元で順位づけするのをやめて、2 軸の 4 象限マップに置きます。そうすると料理は高さを競うものではなく、位置を占めるものになります。さらに一歩進めた主張が「4 象限で表せる食文化はいい食文化」です。マップを広く埋めている食文化は、気分と状況ごとの正解を持っているからです。",
      tags: ["食", "フレームワーク"],
    },
    {
      title: "食感のある飲み物は売れる",
      date: "2026",
      excerpt:
        "飲み物に噛むもの (タピオカ、果肉、ゼリー) が入ると売れます。食感が加わると、何気なく飲むものから一つの体験に変わるからです。データで検証したい仮説ですが、タピオカ以降の系譜がそれを裏づけ続けています。",
      tags: ["食", "プロダクト"],
    },
    {
      title: "早いとは、周りの誰も触っていないこと",
      date: "2026",
      excerpt:
        "あるテーマが本当に早いかを測る自分の基準は、「地元で触っている人がまだ誰もいない」ことです。話題になった時点で、いちばん面白い人たちはもう次へ移っています。暗号資産も AI も、この基準ではすでに遅い。基準は「ニュースに出たばかり」ではなく、「そこにいるのが一次情報を持つ作り手だけ」です。",
      tags: ["タイミング", "戦略"],
    },
    {
      title: "俺は俺、お前はお前",
      date: "2026",
      excerpt:
        "自分の人生を他人の評価に明け渡さない。同時に、他人の人生にも口を出さない。相互不干渉のうえで、各自が自分の選択の結果を引き受ける。家族やチームは協力で動くので限界はありますが、既定の姿勢としては、合意形成の追求より自己決定を取ります。",
      tags: ["生き方", "自律"],
    },
    {
      title: "成長とは価値を生む人が増えること",
      date: "2026",
      excerpt:
        "経済は、既存のお金を回す人だけでなく、新しい価値を生む人が増えることで成長します。技術、プロダクト、会社、雇用。消費産業には正当な役割があり、誰かがそれをうまく運営する必要もあります。ただ、国として何を増やしたいかと問われれば、答えは作り手です。",
      tags: ["経済", "社会"],
    },
    {
      title: "「欧米」と言うのをやめる",
      date: "2026",
      excerpt:
        "日本では米国と欧州が一語に括られがちですが、括った瞬間に解像度が壊れます。米国は長く働き、激しく競争し、生活は高くて容赦がありません。欧州はまったく別の労働契約で動いています。米国に住んだ身として、「欧米」が「ゆとり」の意味で使われるたびに引っかかります。まず分けて、それから議論する。",
      tags: ["文化", "米国"],
    },
    {
      title: "日本の購買意欲を押し上げているのは YouTuber",
      date: "2026",
      excerpt:
        "日本の消費意欲を押し上げているのは、広告や景気より YouTuber ではないかと考えています。かつては富裕層の暮らしの実態を一般の人に伝える媒体がなく、知りようがありませんでした。今は誰もが、比較できる程度のリアリティでそれを見られます。可視化されれば比較対象になり、比較対象になれば購買意欲が刺激されます。データで検証すべき仮説ですが、機構としては筋が通っていると思っています。",
      tags: ["メディア", "消費"],
    },
    {
      title: "2000〜2003 年生まれは運のいい窓",
      date: "2026",
      excerpt:
        "この世代はアナログな子ども時代 (カードゲーム、携帯ゲーム機、秘密基地) を過ごし、思春期にスマホと SNS に出会いました。子ども時代の注意力をフィードに奪われなかった最後の世代であり、その後のツールにはネイティブです。どの世代にもその世代の強みがあります。これがたまたま自分の強みなので、両方を意識して使います。",
      tags: ["世代", "注意"],
    },
  ],
};

/* ── 写真 ── */

const sectionMetaJa: Record<string, { title: string; description: string }> = {
  Japan: {
    title: "日本",
    description: "拠点。ローカル線と寺の屋根と夏の夜。",
  },
  "Andes & Atacama": {
    title: "アンデスとアタカマ",
    description: "南米での 6 週間。塩湖、遺跡、地球でいちばん乾いた砂漠。",
  },
  "Cities & Streets": {
    title: "街と路地",
    description: "古い街並み、水辺、灯りのともる時間。",
  },
  "Seasons of the North": {
    title: "北の季節",
    description: "ミネソタ、ロッキー、アルプスで過ごした一年。オーロラ、初雪、紅葉。",
  },
  "Details & Small Hours": {
    title: "ディテールと小さな時間",
    description: "旅を旅にする小さなもの。",
  },
};

const altJa: Record<string, string> = {
  "/photos/japan-train.jpg": "森の小さな駅に停まるリゾート列車",
  "/photos/temple-hall.jpg": "夏空の下、金色の鴟尾をいただく寺院の堂",
  "/photos/kyushu-grassland.jpg": "夏の雲の下に広がる緑の草原の稜線",
  "/photos/minatomirai-night.jpg": "夜の水面に映る観覧車とみなとみらいの街並み",
  "/photos/fishing-line.jpg": "暗い水面の上で釣り糸を持つ手元",
  "/photos/salt-flat-silhouette.jpg": "雲を映す鏡張りの塩湖に立つ人影",
  "/photos/atacama-volcano-vista.jpg": "快晴の空の下、遠くの火山へ続く砂漠の稜線",
  "/photos/mp-dawn.jpg": "朝一番の光に照らされるマチュピチュとワイナピチュ",
  "/photos/sacred-valley.jpg": "アンデスの峰に囲まれた緑の谷底",
  "/photos/machu-picchu.jpg": "緑の峰に囲まれ、上空から望むマチュピチュ",
  "/photos/llamas-machu-picchu.jpg": "山並みを背にテラスで草を食むリャマ",
  "/photos/andes-train.jpg": "アンデスの小さな駅で待つ列車",
  "/photos/lake-titicaca-boats.jpg": "ウロス島に舫われた葦舟",
  "/photos/valle-de-la-luna-dunes.jpg": "月面のような谷の砂丘を横切る足跡",
  "/photos/desert-moonrise.jpg": "砂漠の稜線に昇る月と淡い色の空",
  "/photos/shanghai-pudong.jpg": "川越しに望む東方明珠塔と陸家嘴の高層ビル群",
  "/photos/hallstatt-lakefront.jpg": "冬の光の中、険しい山の麓に並ぶ湖畔の村",
  "/photos/yu-garden-street.jpg": "豫園旧市街の反り屋根と賑わう路地",
  "/photos/budapest-parliament.jpg": "夜に金色に輝くハンガリー国会議事堂",
  "/photos/suzhou-lantern-alley.jpg": "夕方の賑わう路地に連なる赤提灯",
  "/photos/stephansdom-nave.jpg": "蝋燭に照らされたシュテファン大聖堂のゴシックの身廊",
  "/photos/arequipa-basilica-pigeons.jpg": "石造りの聖堂の階段に群れる鳩",
  "/photos/gastown-rain.jpg": "雨に濡れたガスタウンのレンガ通りと街灯",
  "/photos/budapest-matthias.jpg": "冬空にそびえるマーチャーシュ聖堂の尖塔",
  "/photos/suzhou-garden.jpg": "柳と東屋の軒に縁どられた古典園林の池",
  "/photos/budapest-raven.jpg": "ドナウ川と議事堂を背にしたワタリガラス像のシルエット",
  "/photos/hallstatt-swan.jpg": "ハルシュタットの村を背に湖を滑る白鳥",
  "/photos/hallstatt-overlook.jpg": "山の展望台から見下ろす湖と谷あいの町",
  "/photos/aurora.jpg": "木立の上に広がる赤と緑のオーロラ",
  "/photos/autumn-lake.jpg": "紅葉の森に囲まれた湖を見下ろす",
  "/photos/split-rock-lighthouse.jpg": "秋のスペリオル湖の断崖に建つ灯台",
  "/photos/bighorn-sheep.jpg": "雪の山道を下るビッグホーンの群れ",
  "/photos/rockies-winter-road.jpg": "重い冬雲の下、雪に縁どられた山道",
  "/photos/yellowstone-terrace.jpg": "雪の中で湯気を上げる石灰華のテラス",
  "/photos/alpine-chapel.jpg": "深い青空の下、雪の山頂に建つ石の礼拝堂",
  "/photos/desert-toast.jpg": "夕日の砂漠に掲げたスパークリングワインのグラス",
  "/photos/shanghai-dumplings.jpg": "竹の蒸篭に入った小籠包",
  "/photos/lotus-suzhou.jpg": "庭園に咲くピンクの蓮",
  "/photos/fish-market.jpg": "市場の氷の上に並ぶ鮮魚",
  "/photos/speed-sign-moon.jpg": "夕暮れの制限速度標識と並ぶ月",
  "/photos/airplane-window.jpg": "夜明けの空港を望む機窓",
  "/photos/latte-art.jpg": "木のテーブルに並ぶハート模様のラテ 2 杯",
};

const captionJa: Record<string, string> = {
  "/photos/japan-train.jpg": "森を抜けるローカル線",
  "/photos/temple-hall.jpg": "寺院の堂",
  "/photos/kyushu-grassland.jpg": "夏の草原、九州",
  "/photos/minatomirai-night.jpg": "夜のみなとみらい、横浜",
  "/photos/fishing-line.jpg": "手釣り糸、夏の午後",
  "/photos/salt-flat-silhouette.jpg": "ウユニ塩湖、ボリビア",
  "/photos/atacama-volcano-vista.jpg": "アタカマ砂漠、チリ",
  "/photos/mp-dawn.jpg": "夜明けのマチュピチュ",
  "/photos/sacred-valley.jpg": "聖なる谷、ペルー",
  "/photos/machu-picchu.jpg": "マチュピチュ、ペルー",
  "/photos/llamas-machu-picchu.jpg": "リャマ、マチュピチュ",
  "/photos/andes-train.jpg": "マチュピチュへ向かう途中、ペルー",
  "/photos/lake-titicaca-boats.jpg": "ウロス島、チチカカ湖、ペルー",
  "/photos/valle-de-la-luna-dunes.jpg": "月の谷、アタカマ、チリ",
  "/photos/desert-moonrise.jpg": "アタカマの月の出、チリ",
  "/photos/shanghai-pudong.jpg": "外灘から見る陸家嘴、上海",
  "/photos/hallstatt-lakefront.jpg": "ハルシュタット、オーストリア",
  "/photos/yu-garden-street.jpg": "豫園の旧市街、上海",
  "/photos/budapest-parliament.jpg": "夜の国会議事堂、ブダペスト",
  "/photos/suzhou-lantern-alley.jpg": "山塘街、蘇州",
  "/photos/stephansdom-nave.jpg": "シュテファン大聖堂の内部、ウィーン",
  "/photos/arequipa-basilica-pigeons.jpg": "アレキパ、ペルー",
  "/photos/gastown-rain.jpg": "雨のガスタウン、バンクーバー",
  "/photos/budapest-matthias.jpg": "マーチャーシュ聖堂、ブダペスト",
  "/photos/suzhou-garden.jpg": "古典園林、蘇州",
  "/photos/budapest-raven.jpg": "ドナウ川の上のワタリガラス、ブダペスト",
  "/photos/hallstatt-swan.jpg": "湖の白鳥、ハルシュタット",
  "/photos/hallstatt-overlook.jpg": "ハルシュタットを見下ろす、オーストリア",
  "/photos/aurora.jpg": "オーロラ、ミネソタ",
  "/photos/autumn-lake.jpg": "秋の湖、ミネソタ北部",
  "/photos/split-rock-lighthouse.jpg": "スプリットロック灯台、ミネソタ",
  "/photos/bighorn-sheep.jpg": "ビッグホーン、カナディアンロッキー",
  "/photos/rockies-winter-road.jpg": "カナディアンロッキー",
  "/photos/yellowstone-terrace.jpg": "冬のマンモスホットスプリングス、イエローストーン",
  "/photos/alpine-chapel.jpg": "ダッハシュタインの礼拝堂、オーストリア",
  "/photos/desert-toast.jpg": "夕日に乾杯、アタカマ砂漠、チリ",
  "/photos/shanghai-dumplings.jpg": "小籠包、上海",
  "/photos/lotus-suzhou.jpg": "蓮、蘇州",
  "/photos/fish-market.jpg": "市場の魚屋",
  "/photos/speed-sign-moon.jpg": "道端の月、アタカマ、チリ",
  "/photos/airplane-window.jpg": "夜明けの窓側席",
  "/photos/latte-art.jpg": "コーヒー休憩、寒い町で",
};

export const photographyJa = {
  headline: "ファインダー越しに",
  summary:
    "ストリートと旅の写真です。すべて 1 台のカメラ、初代フルサイズ機の Sony α7 で撮っています。完璧な技術より、残す価値のある瞬間に気づくこと。",
  camera: "Sony α7 · フルサイズミラーレス · このサイトの写真はすべてこの 1 台",
  footer:
    "このサイトの写真はすべて Sony α7 で撮影しています。撮影地は日本、中国、ペルー、ボリビア、チリ、オーストリア、ハンガリー、カナダ、米国です。",
};

export const photoSectionsJa: PhotoSection[] = enSections.map((s) => ({
  title: sectionMetaJa[s.title]?.title ?? s.title,
  description: sectionMetaJa[s.title]?.description ?? s.description,
  photos: s.photos.map((p) => ({
    ...p,
    caption: captionJa[p.src] ?? p.caption,
    alt: altJa[p.src] ?? p.alt,
  })),
}));
