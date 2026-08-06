/* =========================================================
   EEG BRAIN–COMPUTER INTERFACE — MEDICO 2026

   THE ONLY LINE YOU NEED TO EDIT IS THE NEXT ONE.
   Put the YouTube ID between the quotes. The ID is the part
   after "v=" in the watch URL, for example:
     https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  dQw4w9WgXcQ
   ========================================================= */

const YOUTUBE_ID = 'YOUTUBE_ID';

/* ---------------------------------------------------------
   1. LANGUAGE  (English <-> Arabic)

   English lives in index.html and is captured on load.
   Arabic lives in the AR object below. To fix a translation,
   edit AR — nothing else. Anything without an entry in AR
   simply stays in English.
   --------------------------------------------------------- */

const AR = {
  docTitle: 'واجهة بين الدماغ والحاسوب — جامعة دهوك',
  skip: 'انتقل إلى المحتوى',

  eyebrow: 'جامعة دهوك · الهندسة الطبية الحيوية',
  h1: 'واجهة بين الدماغ والحاسوب',
  lede: 'تحكّم بآلة بواسطة عقلك — دون حركة ودون لمس.',
  ledeSub: 'قطبٌ واحد على الجبهة يقرأ تركيزك، فتزداد سرعة المروحة وترتفع كرة داخل أنبوب. لا ضغط على زرّ، ولا كلام، ولا حركة.',
  videoTag: 'شاهد العرض',
  videoSoon: 'الفيديو قريبًا',
  videoBtnAria: 'تشغيل فيديو العرض التوضيحي',
  videoPosterAlt: 'المنظومة على الطاولة: خوذة تخطيط كهربية الدماغ، والأنبوب على قاعدته المطبوعة ثلاثية الأبعاد مع المروحة الصفراء تحته، والحاوية على شكل دماغ.',
  badge: 'مشروع مختار في <strong>MEDICO 2026</strong>، أربيل · قسم MedStar',

  howH: 'كيف يعمل',
  howSub: 'خمس خطوات، من الفكرة إلى محرّك يدور.',
  s1h: 'دماغك',
  s1p: 'التفكير يجعل الخلايا العصبية تُطلق إشاراتها متزامنة، فينتج عن ذلك نشاط كهربائي على فروة الرأس يُقاس بأجزاء من المليون من الفولت.',
  s2h: 'الخوذة',
  s2p: 'خوذة NeuroSky MindWave Mobile 2 — قطب جافّ واحد على الجبهة، ومشبك واحد على الأذن. تُقسّم الإشارة إلى ثماني حزم تردّدية وترسلها عبر البلوتوث مرّة كل ثانية.',
  s3h: 'الحاسوب',
  s3p: 'برنامج بلغة Python يوازن حزم التركيز (بيتا) مقابل حزم الاسترخاء (ألفا وثيتا). تتحوّل النسبة إلى رقم واحد بين 0 و100، يُرسل إلى المتحكّم كل 30 ميلي ثانية.',
  s4h: 'متحكّم ESP32',
  s4p: 'هذا الرقم يحدّد سرعة دوران المروحة عبر تحكّم بعرض النبضة بتردّد 25 كيلوهرتز من خلال ترانزستور MOSFET. وتردّد التبديل أعلى من حدّ السمع البشري، فتبقى المروحة صامتة.',
  s5h: 'المروحة والأنبوب',
  s5p: 'يصعد الهواء عبر فوّهة مطبوعة ثلاثية الأبعاد فيحمل كرة تنس طاولة وزنها 2.7 غرام في الهواء. ركّز فترتفع، واسترخِ فتهبط. وتستغرق الحلقة كاملة 60–100 ميلي ثانية.',

  tryH: 'جرّب المعادلة',
  tryP: 'اسحب لتغيير قيمة التركيز. تُحسب دورة التشغيل بالطريقة نفسها التي يحسبها بها البرنامج الثابت على ESP32. أمّا الأنبوب فهو للتوضيح فقط.',
  tryLabel: 'التركيز',
  unitFocus: '% تركيز',
  unitDuty: '/ 255 دورة تشغيل',
  stateOn: 'المروحة تعمل',
  stateOff: 'المروحة متوقّفة — أقل من حدّ 20%',

  whyH: 'لماذا يهمّ هذا في الرعاية الصحية',
  whySub: 'الكرة موجودة فقط لتجعل الإشارة مرئية. ما بناه المشروع فعلًا هو قناة تحكّم تبدأ في الدماغ وتنتهي عند محرّك — والمحرّك هو العنصر الذي يؤدّي العمل في الكرسي المتحرّك، وفي اليد الاصطناعية، وفي معظم الأجهزة المساعدة.',
  c1h: 'يد اصطناعية',
  c1p: 'انزع المروحة من الطرف وضع مكانها يدًا آلية. الرقم نفسه من 0 إلى 100 الذي يضبط سرعة المروحة يمكنه ضبط مقدار انقباض الأصابع. وهذه هي الخطوة التالية المعلنة للمشروع.',
  c2h: 'تحريك كرسي متحرّك',
  c2p: 'الكرسي المتحرّك الكهربائي يحتاج تمامًا ما تحتاجه المروحة: محرّك يُخبَر بسرعة الدوران. ولمن لا يستطيع الإمساك بعصا التحكّم أو دفعها، يصبح التركيز مدخل تحكّم لا يتطلّب يدًا.',
  c3h: 'أن تطلب شيئًا',
  c3p: 'اعرض أربعة خيارات على شاشة — ماء، طعام، مساعدة، حرّكني — واترك مستوى التركيز يختار بينها. ولشخص مصاب بالتصلّب الجانبي الضموري أو بإصابة في النخاع الشوكي فقد الحركة ولم يفقد التفكير، تكون هذه وسيلة ليُفهَم دون أن يتكلّم.',
  honest: '<strong>بصراحة:</strong> لم يُنجَز أيٌّ من هذه الثلاثة بعد، والقطب الواحد لا يستطيع إلّا معرفة مدى تركيز الشخص — لا ما يفكّر فيه. أمّا المُنجَز والعامل فهو الطبقة التي سيقوم عليها كل ما سبق: من الدماغ إلى المحرّك، في أقل من عُشر الثانية، بمكوّنات متاحة للجميع.',

  posterH: 'ملصق المشروع',
  posterSub: 'المشروع كلّه في صفحة واحدة. <strong>هذا ليس الملصق الذي عُرض في يوم التصميم الهندسي الثالث عشر</strong> — فقد نُقّح بعده ليطابق التحسينات التي أُجريت لاحقًا: اللوحة المُلحَمة بدل لوحة التجارب، والمروحة الأصغر التي تعمل على بطارية، والفوّهة والأنبوب الجديدان. والملصق بقياس كبير، فافتحه بالحجم الكامل لقراءته على نحوٍ مريح؛ أمّا النسخة أدناه فهي للاطّلاع العام.',
  posterOldLead: 'تبحث عن النسخة التي عُرضت فعلًا في المعرض؟',
  posterOld: 'الملصق القديم، كما عُرض في يوم التصميم الهندسي الثالث عشر',
  posterAlt: 'ملصق المشروع: العنوان، والملخّص، ومخطّط معمارية المنظومة، وقائمة المكوّنات المادية مع صورها، ومسار المنهجية بخمس خطوات، وصور للوحة البيانات وللمنظومة أثناء العمل، والنتائج والاستنتاج والمراجع.',
  posterFull: 'افتح الملصق بالحجم الكامل — 2400 بكسل',

  protoH: 'النموذج الأولي',
  protoSub: 'تغيّر التنفيذ منذ أوّل عرض له. انتقلت الدوائر الإلكترونية من لوحة التجارب إلى لوحة مُلحَمة داخل حاوية مطبوعة ثلاثية الأبعاد على شكل دماغ، واستُبدلت المروحة الكبيرة التي كانت تعمل من مصدر تغذية مخبري بمروحة صغيرة تعمل على بطاريات. الصور الأربع الأولى هي الإصدار الحالي، والأخيرة للمنصّة أثناء عملها في يوم التصميم الهندسي الثالث عشر بجامعة دهوك، قبل هذه التغييرات.',
  cap1: '<strong>المنظومة كاملة، الإصدار الحالي.</strong> الحاسوب يشغّل اللوحة الحيّة، والخوذة تغذّيه، والأنبوب والحاوية إلى جانبه.',
  cap2: '<strong>مجموعة تدفّق الهواء.</strong> فوّهة مطبوعة تضيّق مسار الهواء تحت الأنبوب، والمسطرة على الجانب تُقرأ منها وضعية الكرة.',
  cap3: '<strong>الحاوية.</strong> قوقعة دماغ مطبوعة تحتوي الآن اللوحة المُلحَمة التي حلّت مكان لوحة التجارب، بفتحة تهوية في الأعلى وكابل واحد من الجانب.',
  cap4: '<strong>أثناء العرض للزوّار.</strong> المنصّة في يوم التصميم الهندسي الثالث عشر، ولوحة الأمواج الدماغية حيّة على الشاشة.',
  cap5: '<strong>اللوحة التي تتولّى التبديل.</strong> متحكّم ESP32 وفوقه اللوحة المُلحَمة، وعليها الموصلان ثلاثيّا الأطراف الواردان في المخطّط — J1 للبطارية وJ2 إلى المروحة.',
  shot5Aria: 'افتح الصورة 4: المتحكّم واللوحة المُلحَمة.',
  bci5Alt: 'لوحة تطوير ESP32-WROOM-32 وفوقها لوحة خضراء صغيرة مُلحَمة تحمل موصلَين أبيضَين ثلاثيّي الأطراف.',
  shot1Aria: 'افتح الصورة 1: المنظومة كاملة على الطاولة.',
  shot2Aria: 'افتح الصورة 2: مجموعة الأنبوب والفوّهة.',
  shot3Aria: 'افتح الصورة 3: الحاوية على شكل دماغ.',
  shot4Aria: 'افتح الصورة 4: العرض أثناء تشغيله في المعرض.',
  bci1Alt: 'المنظومة كاملة على طاولة خشبية: حاسوب محمول يعرض لوحة الأمواج الدماغية الحيّة، وخوذة تخطيط كهربية الدماغ، والأنبوب على فوّهته مع المروحة الصفراء، والحاوية على شكل دماغ.',
  bci2Alt: 'مجموعة تدفّق الهواء عموديًّا: أنبوب أبيض عليه مسطرة قياس، مثبَّت على فوّهة سوداء مطبوعة ثلاثية الأبعاد وتحتها المروحة الصفراء.',
  bci3Alt: 'الحاوية المطبوعة ثلاثية الأبعاد على شكل دماغ، تحتوي الدوائر الإلكترونية، مع فتحة تهوية في أعلاها وكابل يخرج من جانبها.',
  bci4Alt: 'المنصّة أثناء العرض: الأنبوب على الطاولة إلى جانب شاشة تعرض لوحة الأمواج الدماغية الحيّة، وحول المنصّة زوّار.',

  teamH: 'الفريق',
  teamPhotoAlt: 'الطالبان مع الإشراف الأكاديمي خلف منصّة المشروع، وعلى الطاولة أمامهم الأنبوب وشاشة اللوحة الحيّة.',
  teamCap: 'الفريق مع الإشراف الأكاديمي في يوم التصميم الهندسي الثالث عشر، جامعة دهوك.',
  certPhotoAlt: 'علي أزهر ديوالي ومنصور آزاد يقفان على جانبَي ملصق المشروع الموضوع على حامل، ويحمل كلٌّ منهما شهادة مشاركة.',
  certCap: 'علي أزهر ديوالي (يسار الصورة) ومنصور آزاد (يمينها) مع شهادتَي المشاركة وملصق المشروع.',
  supRole: 'الإشراف',
  supOrg: 'قسم الهندسة الطبية الحيوية، كلية الهندسة، جامعة دهوك',
  roleTeam: 'فريق المشروع',
  dept: 'قسم الهندسة الطبية الحيوية · كلية الهندسة · جامعة دهوك',

  techH: 'التفاصيل الفنية',
  sumT: 'التفاصيل الفنية',
  sumS: 'المكوّنات، معادلة التركيز، التوقيت، نتائج الاختبار، القيود',
  techTitle: 'العنوان الكامل للمشروع: <em>EEG-Based Motor Speed Control System Using a Brain–Computer Interface</em>',

  hComp: 'المكوّنات',
  capComp: 'قائمة المواد',
  thPart: 'المكوّن',
  thRole: 'الوظيفة',
  rHeadset: 'قطب جافّ واحد عند Fp1 مع مرجع بمشبك الأذن. يرسل قدرة ثماني حزم عبر البلوتوث',
  rEsp: 'يستقبل قيمة التركيز عبر المنفذ التسلسلي USB ويولّد إشارة PWM',
  rMosfet: 'ترانزستور MOSFET قناة N بمستوى منطقي، يعمل مفتاحًا في الجهة السفلية للمروحة',
  rDiode: 'ديود شوتكي على طرفَي المروحة، كاثوده إلى V+. يقصّ نبضة الجهد الحثّي عند إيقاف المروحة',
  rRes: 'يحدّ من تيار الاندفاع إلى البوّابة عند التبديل السريع',
  rPull: 'مقاومة سحب إلى الأرضي. تُبقي الـMOSFET مغلقًا كلّما لم يكن منفذ ESP32 يقوده فعليًّا، بما في ذلك أثناء الإقلاع وإعادة التشغيل',
  rCap: 'مكثّف خزفي مثبِّط على طرفَي المروحة، على التوازي مع D1. يخمد ضجيج التبديل عالي التردّد.',
  pFan: 'مروحة تيار مستمر صغيرة',
  rFan: 'مصدر تدفّق الهواء، يُقاد بتحكّم بعرض النبضة من خطّ البطارية',
  pBatt: 'حزمة بطاريات <span class="dim">(V+ ≈ 4.2 فولت)</span>',
  rBatt: 'تُغذّي المروحة عبر الموصل J1. المنظومة مكتفية بذاتها — دون مصدر تغذية مخبري',
  pBall: 'كرة تنس طاولة <span class="dim">(2.7 غرام، 40 مم)</span>',
  rBall: 'تجعل الإشارة مرئية',
  pTube: 'فوّهة وأنبوب مطبوعان ثلاثي الأبعاد',
  rTube: 'من مادة PLA، صُمّما في Fusion 360. يوجّهان تدفّق الهواء ويعيدان الكرة إلى المركز',

  hCircuit: 'الدائرة',
  ci1: 'المنفذ <b>GPIO4</b> في ESP32 → المقاومة R1 بقيمة 220 أوم → <b>بوّابة</b> Q1',
  ci2: 'المقاومة R2 بقيمة 6.8 كيلو أوم من البوّابة إلى <b>الأرضي</b>، حتى لا تُترك البوّابة عائمة',
  ci3: '<b>مصرف</b> Q1 → الطرف السالب للمروحة · <b>مصدر</b> Q1 → الأرضي، مشترك مع ESP32 والبطارية',
  ci4: 'الطرف الموجب للمروحة والطرف الموجب للبطارية على الخطّ نفسه، <b>V+ ≈ 4.2 فولت</b>',
  ci5: 'الديود D1 من نوع SS36 على طرفَي المروحة: الكاثود إلى V+ والأنود إلى الطرف السالب عند المصرف',
  ci6: 'المكثّف C1 على طرفَي المروحة، على التوازي مع D1 (من المصرف / سالب المروحة إلى V+)',
  ci7: 'موصلان: <b>J1</b> لدخل البطارية (V+، غير موصول، أرضي) و<b>J2</b> لخرج المروحة (أرضي، سالب المروحة، V+)',
  schemAlt: 'مخطّط الدائرة: منفذ GPIO4 في ESP32 يقود بوّابة ترانزستور IRLZ44N عبر مقاومة 220 أوم، ومقاومة سحب بقيمة 6.8 كيلو أوم تُبقي البوّابة منخفضة. مصرف الترانزستور يفصل الطرف السالب للمروحة. وعلى طرفَي المروحة يوجد ديود شوتكي SS36 ومكثّف خزفي مثبِّط على التوازي مع بعضهما، يعودان إلى خطّ 4.2 فولت. وموصلان ثلاثيّا الأطراف، أحدهما لدخل البطارية والآخر لخرج المروحة.',
  schemCap: 'دائرة التبديل. متحكّم ESP32 لا يحمل تيار المروحة إطلاقًا — كل ما يفعله هو رفع بوّابة الترانزستور وخفضها، والمقاومة R2 تُبقي هذه البوّابة منخفضة أثناء إقلاع اللوحة. أمّا D1 وC1 فيقعان على طرفَي المروحة ليمتصّا نبضة الجهد وضجيج التبديل الذي تُعيده المروحة عند كل قطع للتيار.',

  hFormula: 'معادلة التركيز',
  fIntro: 'ترسل الخوذة قدرة ثماني حزم مرّة كل ثانية. وتوازن المعادلة حزمتَي بيتا، اللتين ترتفعان مع التركيز، مقابل حزم ألفا وثيتا التي ترتفع مع الاسترخاء.',
  f1: 'الرقم <b>+ 0.1</b> يمنع القسمة على صفر.',
  f2: 'تُخزَّن قدرة الحزم بصيغة <b>log10(raw + 1)</b>، فتُحسب النسبة على قيم لوغاريتمية.',
  f3: '<b>حزمتا دلتا وغاما مُستثناتان بشكل مقصود</b> — دلتا لا علاقة لها بحالة اليقظة، وغاما مشوّشة أكثر من اللازم مع قطب جافّ واحد.',
  f4: 'تُحوَّل النسبة الخام خطّيًّا من نطاق فيزيولوجي يقارب <b>0.3–0.7</b> إلى <b>0–1</b>، ثم تُحوَّل إلى بايت بقيمة <b>0–100</b>.',
  f5: 'تُنعَّم القيمة أسّيًّا قبل إرسالها، فتصل المروحة إشارة هادئة.',

  hBands: 'الحزم الثماني',
  capBands: 'حزم ترددات تخطيط كهربية الدماغ كما ترسلها الخوذة',
  thBand: 'الحزمة',
  thRange: 'النطاق',
  thState: 'الحالة',
  bDelta: 'نوم عميق',
  bTheta: 'نُعاس واسترخاء',
  bLA: 'استرخاء',
  bHA: 'استرخاء مع يقظة خفيفة',
  bLB: 'تركيز خفيف',
  bHB: 'تركيز قويّ',
  bLG: 'إدراك عالي المستوى',
  bMG: 'تركيز شديد',
  bandsNote: 'الحزم الثماني موجودة في الدماغ في الوقت نفسه. ما يتغيّر هو نسبة قدرة كل منها.',

  hTiming: 'التوقيت',
  t1: 'من الخوذة إلى الحاسوب: بروتوكول ThinkGear التسلسلي بسرعة 57600 بود، مع التحقّق من المجموع الاختباري لكل حزمة بيانات.',
  t2: 'من الحاسوب إلى ESP32: بايت واحد بقيمة 0–100 كل 30 ميلي ثانية بسرعة 115200 بود — نحو 0.3% من سعة الوصلة.',
  t3: 'إشارة PWM: 25 كيلوهرتز، بدقّة 8 بت، على وحدة LEDC في ESP32.',
  t4: 'تحت 20% من التركيز تتوقّف المروحة تمامًا. ومن 20% إلى 100% تُحوَّل دورة التشغيل إلى النطاق 132–255 — و132 هي أدنى دورة تدور عندها المروحة فعلًا.',
  t5: '<b>من الطرف إلى الطرف: 60–100 ميلي ثانية.</b> يبدو الأمر فوريًّا.',

  hSupply: 'اختبار جهد التغذية — الإصدار السابق',
  supIntro: 'استخدم إصدار سابق مروحة كبيرة مصنّفة لـ12 فولت، شُغّلت بجهد أعلى بكثير من تصنيفها من مصدر تغذية مخبري قابل للضبط، لأنّ تدفّق الهواء عند 12 فولت لم يكن قويًّا بما يكفي لرفع الكرة. وهذه كانت النتائج:',
  capSup: 'سلوك الكرة عند جهود تغذية مختلفة',
  thSupply: 'الجهد',
  thResult: 'النتيجة',
  v12: 'ترتفع الكرة قليلًا ثم تهبط',
  v15: 'ترتفع، لكن دون ثبات على ارتفاع معيّن',
  v18: 'تستقرّ قرب منتصف الأنبوب',
  v20: 'مدى تحكّم كامل من الأسفل إلى الأعلى. الأفضل',
  supNote1: 'فوق 25 فولت لم تخرج الكرة من الأنبوب. فالفوّهة المخروطية تُنشئ منطقة منخفضة الضغط بتأثير برنولي تسحب الكرة إلى المركز. وهذه خاصيّة في التصميم لا مصادفة.',
  supNote2: '<b>الإصدار الحالي يستخدم مروحة أصغر تعمل من حزمة بطاريات بجهد نحو 4.2 فولت</b>، فلم يعد يحتاج مصدر تغذية مخبري، وأصبحت المنظومة مكتفية بذاتها. وأُبقي الاختبار أعلاه لأنّه ما أوصل إلى هنا.',

  hRel: 'الاعتمادية في المعرض',
  r1: 'بوّابة جودة الإشارة تُجبر قيمة التركيز على الصفر عندما لا يكون تلامس القطب جيّدًا، فلا تعمل المروحة على التشويش.',
  r2: 'إذا انقطع اتصال الخوذة، يرسل البرنامج صفرًا إلى ESP32 ويغلق المنفذ وينتظر ثم يعيد الاتصال تلقائيًّا.',
  r3: 'يكتب البرنامج الثابت دورة تشغيل صفرية عند الإقلاع، فتكون المروحة متوقّفة عند تشغيل الطاقة.',

  hLim: 'القيود المعروفة',
  l1: '<b>قطب واحد.</b> تستطيع المنظومة قراءة مستوى التركيز العام فقط، ولا تستطيع تمييز أفكار محدّدة.',
  l2: '<b>جهد بوّابة 3.3 فولت.</b> منفذ ESP32 يشغّل الـMOSFET لكنه لا يدفعه إلى التشبّع الكامل. ودائرة قيادة بوّابة مخصّصة تحلّ ذلك.',
  l3: '<b>الخطّ القاعدي لكل مستخدم.</b> نطاق التحويل المناسب لشخص يختلف قليلًا عن غيره. والمعايرة التلقائية لكل جلسة عمل مستقبلي.',
  l4: '<b>موازنة التنعيم.</b> التنعيم يجعل الكرة أكثر ثباتًا لكنه يضيف جزءًا من الثانية من التأخير.',

  linksH: 'روابط',
  lkReport: 'التقرير',
  ltReport: 'اطلب التقرير الكامل',
  ldReport: 'يُرسَل عند الطلب. عرِّفنا بنفسك وبالغرض من طلبه',
  lkFolio: 'الأعمال',

  foot1: 'قسم الهندسة الطبية الحيوية، كلية الهندسة<br>جامعة دهوك',
  foot2: 'عُرض في MEDICO 2026، أربيل · قسم MedStar',

  lbClose: 'إغلاق عارض الصور',
  lbPrev: 'الصورة السابقة',
  lbNext: 'الصورة التالية'
};

/* English for the few strings JS writes itself, which therefore have no
   home in index.html to be captured from. */
const EN_EXTRA = {
  stateOn:   'Fan running',
  stateOff:  'Fan off — below the 20% floor',
  videoSoon: 'Video coming soon'
};

const LANG_HOOKS = [];   // things that need re-rendering after a switch
let LANG = 'en';

const i18n = (function () {
  const EN = {};
  const EN_ATTR = { alt: {}, aria: {} };

  document.querySelectorAll('[data-i18n]').forEach(el => {
    EN[el.dataset.i18n] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    EN_ATTR.alt[el.dataset.i18nAlt] = el.getAttribute('alt') || '';
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    EN_ATTR.aria[el.dataset.i18nAria] = el.getAttribute('aria-label') || '';
  });

  const EN_TITLE = document.title;
  const btn = document.getElementById('langBtn');

  function t(key) {
    if (LANG === 'ar' && AR[key] != null) return AR[key];
    if (EN[key] != null) return EN[key];
    return EN_EXTRA[key] != null ? EN_EXTRA[key] : '';
  }

  function apply(lang) {
    LANG = lang === 'ar' ? 'ar' : 'en';
    const ar = LANG === 'ar';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = ar ? AR[el.dataset.i18n] : EN[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const k = el.dataset.i18nAlt;
      const v = ar ? AR[k] : EN_ATTR.alt[k];
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const k = el.dataset.i18nAria;
      const v = ar ? AR[k] : EN_ATTR.aria[k];
      if (v != null) el.setAttribute('aria-label', v);
    });

    const root = document.documentElement;
    root.lang = LANG;
    root.dir = ar ? 'rtl' : 'ltr';
    root.classList.toggle('lang-ar', ar);
    document.title = ar && AR.docTitle ? AR.docTitle : EN_TITLE;

    // the button's visible text IS its label, in the language it switches to
    if (btn) {
      btn.textContent = ar ? 'English' : 'العربية';
      btn.setAttribute('lang', ar ? 'en' : 'ar');
    }

    try { localStorage.setItem('lang', LANG); } catch (e) { /* private mode */ }
    LANG_HOOKS.forEach(fn => fn());
  }

  if (btn) {
    btn.addEventListener('click', () => apply(LANG === 'ar' ? 'en' : 'ar'));
  }

  // remembered choice, otherwise the browser's preference, otherwise English
  let start = null;
  try { start = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
  if (!start && (navigator.language || '').toLowerCase().indexOf('ar') === 0) start = 'ar';
  if (start === 'ar') apply('ar');

  return { t: t, apply: apply };
})();

/* ---------------------------------------------------------
   2. MISSING IMAGES
   Any image that fails to load becomes a clean grey block
   labelled with the filename it is waiting for, so a photo
   that has not arrived yet never shows a broken-image icon.
   --------------------------------------------------------- */
(function missingImages() {

  function mark(img) {
    if (!img || img.dataset.phDone) return;
    // no src yet means nothing has failed; the lightbox image is filled on demand
    if (!img.getAttribute('src')) return;
    if (img.closest('.lightbox')) return;
    img.dataset.phDone = '1';

    // a logo that has not arrived hides its slot, so the strip stays balanced
    const slot = img.closest('.lg');
    if (slot) { slot.classList.add('lg-missing'); return; }

    const box = document.createElement('span');
    box.className = 'is-missing';
    box.setAttribute('aria-hidden', 'true');
    box.dataset.label = img.dataset.ph || img.getAttribute('src') || 'image';

    (img.closest('picture') || img).replaceWith(box);
  }

  document.addEventListener('error', e => {
    if (e.target && e.target.tagName === 'IMG') mark(e.target);
  }, true);

  const sweep = () => document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) mark(img);
  });
  sweep();
  window.addEventListener('load', sweep);
})();

/* ---------------------------------------------------------
   3. VIDEO
   Nothing is fetched from youtube.com until the poster is
   tapped, which is the main reason this page stays quick.
   --------------------------------------------------------- */
(function video() {
  const box = document.getElementById('video');
  const btn = document.getElementById('videoBtn');
  const tag = document.getElementById('videoTag');
  if (!box || !btn) return;

  const ready = YOUTUBE_ID && YOUTUBE_ID !== 'YOUTUBE_ID';

  if (!ready) {
    const showSoon = () => { if (tag) tag.innerHTML = i18n.t('videoSoon'); };
    showSoon();
    LANG_HOOKS.push(showSoon);
    btn.setAttribute('aria-disabled', 'true');
    btn.addEventListener('click', e => e.preventDefault());
    return;
  }

  let warmed = false;
  const warm = () => {
    if (warmed) return;
    warmed = true;
    ['https://www.youtube-nocookie.com', 'https://i.ytimg.com'].forEach(href => {
      const l = document.createElement('link');
      l.rel = 'preconnect';
      l.href = href;
      document.head.appendChild(l);
    });
  };
  btn.addEventListener('pointerenter', warm, { once: true });
  btn.addEventListener('touchstart', warm, { once: true, passive: true });

  btn.addEventListener('click', () => {
    const frame = document.createElement('div');
    frame.className = 'video-frame';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + YOUTUBE_ID +
                 '?autoplay=1&rel=0&modestbranding=1';
    iframe.title = 'Demonstration of the EEG brain–computer interface';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    frame.appendChild(iframe);
    box.replaceChildren(frame);
    iframe.focus();
  });
})();

/* ---------------------------------------------------------
   4. TRY THE MAPPING
   focusPercent -> PWM duty, exactly as the ESP32 firmware
   does it. Arduino's map() truncates, so Math.trunc here too.
   --------------------------------------------------------- */
(function tryWidget() {
  const FOCUS_FLOOR = 20;
  const PWM_START   = 132;
  const PWM_MAX     = 255;

  const slider = document.getElementById('focus');
  const ball   = document.getElementById('ball');
  const fan    = document.getElementById('fan');
  const nFocus = document.getElementById('rdFocus');
  const nDuty  = document.getElementById('rdDuty');
  const state  = document.getElementById('rdState');
  if (!slider) return;

  function duty(focus) {
    if (focus < FOCUS_FLOOR) return 0;
    return PWM_START + Math.trunc(
      (focus - FOCUS_FLOOR) * (PWM_MAX - PWM_START) / (100 - FOCUS_FLOOR)
    );
  }

  function paint() {
    const focus = Number(slider.value);
    const d = duty(focus);
    const height = d === 0 ? 0 : (focus - FOCUS_FLOOR) / (100 - FOCUS_FLOOR);

    nFocus.textContent = focus;
    nDuty.textContent = d;
    state.innerHTML = d === 0 ? i18n.t('stateOff') : i18n.t('stateOn');
    state.classList.toggle('off', d === 0);

    ball.style.setProperty('--p', height.toFixed(3));
    fan.style.setProperty('--p', height.toFixed(3));
  }

  slider.addEventListener('input', paint);
  LANG_HOOKS.push(paint);
  paint();
})();

/* The report is deliberately not published — the Links section has a mail
   link instead of a download, so there is no PDF to check for here. */

/* ---------------------------------------------------------
   5. LIGHTBOX
   The photos live in index.html, so they still show if this
   file fails to load — only enlarge-on-tap is lost.
   --------------------------------------------------------- */
(function lightbox() {
  const shots  = Array.from(document.querySelectorAll('.shot'));
  const lb     = document.getElementById('lightbox');
  const lbImg  = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  if (!lb || !shots.length) return;

  let i = 0;
  let lastFocus = null;

  function paint() {
    const img = shots[i].querySelector('img');
    if (!img) return;
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.getAttribute('alt') || '';
  }

  function open(n) {
    i = n;
    lastFocus = document.activeElement;
    paint();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lb.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  function step(n) {
    i = (i + n + shots.length) % shots.length;
    paint();
  }

  shots.forEach((btn, n) => btn.addEventListener('click', () => open(n)));
  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => step(-1));
  lbNext.addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'Tab') {
      const ring = [lbClose, lbPrev, lbNext];
      const at = ring.indexOf(document.activeElement);
      e.preventDefault();
      ring[((e.shiftKey ? at - 1 : at + 1) + ring.length) % ring.length].focus();
    }
  });
})();
