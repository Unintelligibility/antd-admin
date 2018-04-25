// const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

// let authenticateListData = Mock.mock({
//   'data|11-20': [
//     {
//       id: '@id',
//       title: '@ctitle(10,20)',
//       source: '@ctitle(3,8)',
//       createTime: '@datetime',
//       content: '@paragraph(4)',
//     },
//   ],
// })
//
//
// let database1 = authenticateListData.data
let database1 = [
  {
    id: 10176,
    title: '一人改变一城！这一夜他们就像夺得总冠军',
    source: '新浪体育',
    categories: '体育',
    createTime: '2018-4-26 08:12',
    content: '<img class="lazy opacity_0 " id="img_0" src="http://zkres1.myzaker.com/201804/5adf13cf7f52e9691100002b_640.jpg" data-height="718" data-width="1080" />',
  },
  {
    id: 10177,
    title: '直击 - 身心俱疲！韦德想要离开 只是嘴上不说',
    source: '腾讯体育',
    categories: '体育',
    createTime: '2018-4-26 08:12',
    content: '直击 - 身心俱疲！韦德想要离开 只是嘴上不说\n.文 / 腾讯体育驻纽约特派员 沈洋." 我爱费城，我不会在这里制造大新闻的。" 赛后的韦德笑着回答记者的问题。可是你分明能听出这笑声中流露出的一丝苦涩和失落。.这到底是不是韦德的最后一场比赛，没有人知道，包括韦德自己。.比赛最后的 25 秒，韦德看着头顶的时钟，皮球在双手间交替运球。他知道，这最后的时间对于比赛的胜负毫无意义，他能做的也只能是将时间耗尽，比分定格。面前，是开始庆祝的 76 人。他们是那么年轻，意气风发。.时间耗尽，韦德将皮球递交给面前的本－西蒙斯。哨声响起，彩带喷洒，呼声震天。他走向 76 人的年轻人，走向西蒙斯和恩比德，给他们拥抱，然后轻声耳语。." 看他从场上走下去，我有种感觉，他想要离开了。"《露天看台》的著名记者霍华德 - 贝克说。.上一次来到这里的时候，韦德拿了 28 分，重生一般地拿下了胜利。而那也是这个系列赛中，热火唯一一场胜利，也是本赛季的最后一次。那一天，韦德说他太想念季后赛的一切了。当然也包括那个曾经在季后赛叱诧风云的自己。.而再次回来，耳边同样是震耳的嘘声，喜剧明星凯文 - 哈特依然在场边大喷垃圾话，只是韦德却再也没有复制那一晚奇迹的能力。" 我爱季后赛，这是整个赛季里最好的时间，如果我可以帮助球队，我会去做。但是今天，我的身体，我的手腕，我的肘部却不能允许我这样做了。" 赛后的韦德坦诚的说。.赛前，韦德穿着一件帽衫走进球场。上面写着：" 我不为任何人，我为迈阿密。" 他太想给予这支球队他的全部，一如往昔般给球队带来更多胜利。可是他的身体却告诉他，即使再渴望，可是这一切都变得如此艰难。.不走到这样的年岁，韦德恐怕从没有感受过这份艰难。他打替补，被交易，可幸好，他最后能回到迈阿密落脚。" 没什么能比在迈阿密结束这个赛季更棒的结局。我还能回来，给这些年轻人做榜样，帮助他们进步，对于我来说，这最为重要。" 韦德告诉记者，如果不是回到迈阿密，他恐怕早就选择离开。.回到这里，才是回家。.赛后主教练斯波说，如果韦德愿意，他可以做热火一辈子的替补。可是韦德却说，他需要好好想想未来。而其实，在过去的这几天，他也确实在思考这样的问题了，只是还没有答案。.记者问韦德，你在夏天如何寻找能够激励你的东西，让你回到球场。他却说，这个夏天他迫不及待的去享受作为一个父亲和孩子的相处时光。而至于篮球的部分，" 我真的不知道。".赛后的采访结束，韦德和朋友一起离开，周围没有更多的人围拢过来。他就那么安静的离开，而脚步显得异常沉重。你甚至从背影就能看出他的疲惫。." 他把能给的都给了出去，你能看出他的精疲力尽，但是也许，他还会回来的。" 霍华德 - 贝克说。.走出球馆之前，一个场馆工作人员与韦德擦肩而过，停下了脚步，回头看了看，感叹道：" 那是德韦恩吗？真不像了。".\n',
  },
  {
    id: 10178,
    title: '鲁媒：山东因外援吃大亏 辽篮肆意庆祝川疆无法体会',
    source: '腾讯体育',
    categories: '体育',
    createTime: '2018-4-26 08:13',
    content: '鲁媒：山东因外援吃大亏 辽篮肆意庆祝川疆无法体会\n.北京时间 4 月 25 日讯 在短短七个月的时间里，辽宁男篮接连拿到全运会冠军和联赛冠军，一举摘掉了 " 千年老二 " 的帽子，达到了辽篮的巅峰。这是对执著精神最好的奖赏。 【CBA 专题】.辽篮早就应该拿冠军了，他们拥有全国最优秀的人才梯队，辽宁籍球员遍布全国各地，却一次又一次地吞下失败的苦果：在国内最重要的两项赛事中，辽篮在 2017 年全运会夺冠之前，连续拿到了 10 个亚军。一冠难求的窘状，与其篮球人才大省的身份极不相称。.尽管，全国球迷都在调侃辽篮，那句 " 辽宁是冠军 " 的戏谑口号喊遍大江南北，特别是 2015、2016 年，辽篮两次错过绝佳的夺冠机会，外界的嘲讽达到了无以复加的程度。但是甭管多难，辽篮始终没有放弃对冠军的渴望。.辽篮夺冠，是青训建设的胜利。这么多年来，辽篮一直都重视后备人才的培养，每个全运周期都有一茬新人涌现，并能给予适度的锻炼机会。在辽篮如今的本土阵容中，李晓旭、韩德君、郭艾伦、刘志轩、贺天举、赵继伟等人的年龄在 23-29 岁之间，是职业球员最好的年华。或许，捅破了那层窗户纸之后，辽篮这批球员的辉煌才刚刚开始，有可能就此建立属于自己的王朝。.中国篮球早已步入了职业化，许多财大气粗的球队都通过人才引进的方式，以达到迅速补强阵容的目的。但是，这种行为毕竟是短视的，很难长久。打仗亲兄弟，上阵父子兵。这么多年来，辽篮一直信任自家弟兄，从青年队就在一个战壕里拼搏，脾气秉性都了如指掌，长大了还能不一起玩命？辽篮夺冠，也是本土教练的胜利。中国篮球职业化 23 年，在主教练人选的问题上，辽篮也曾经迷茫过，像其他球队那样尝试着用外籍主教练，然而这个过程极为短暂，之后便迅速纠偏，将信任票投给了本土教练。辽篮坚持用本土教练，是从全运会、联赛两个领域通盘考虑的，在眼前成绩和人才培养方面能两者兼顾。.郭士强 2006 年就挂帅辽篮，但是他的帅位并不稳固：2009 年，郭士强不再担任辽篮主帅，但是立陶宛籍主帅威斯威拉水土不服，没过多久他就重回帅位；2011 年 12 月，郭士强下课，辽宁青年队教练李戈走上前台，不久之后吴庆龙接手辽篮；2013 年全运会结束后，郭士强第三次挂帅辽篮，经过五年的磨砺，终于将辽篮带到了历史的巅峰。.辽篮夺冠，更是团队精神的胜利。我们在总决赛上看到了一个无所不能的哈德森，那些匪夷所思的高难度进球，完美诠释了大心脏球员的本色。可是，在常规赛期间，哈德森状态很不稳定，长期备受质疑，呼吁辽篮换外援的声音一浪高过一浪，但是辽篮不为所动，给予了哈德森高度的信任。.相比之下，理论上应有更大作为的山东、新疆，都在外援环节吃了大亏。山东的劳森身在曹营心在汉，不管是打球还是生活，都跟国内球员不合拍，到了你死我活的半决赛舞台，这一症结彻底暴露，悔之晚矣。劳森没有水平吗？如今在 NBA 打季后赛，时不时有高光演出，若山东能跟他产生化学反应，还愁拆不了广厦？.辽篮夺冠，是对执著人生的最好奖赏。正如郭艾伦所说，他们一直都被质疑，被嘲讽，但从没有人放弃，一直都为冠军的梦想而默默努力。夺冠之夜，辽篮尽情宣泄，情难自已，此情此景，是之前夺冠的新疆、四川所不能体会的。.\n',
  },
  {
    id: 10179,
    title: '药厂门将莱诺可能离队，马竞有意今夏追逐',
    source: '虎扑足球',
    categories: '体育',
    createTime: '2018-4-26 08:13',
    content: '药厂门将莱诺可能离队，马竞有意今夏追逐\n.虎扑 4 月 25 日讯 \xa0 德国媒体报道称，马竞、那不勒斯等球队有意签下勒沃库森门将莱诺。.莱诺和勒沃库森合同到 2020 年到期，他合同中包含 2500 万欧元的解约金条款，这名 26 岁的球星希望今夏离开球队。据《体育图片报》报道的消息，莱诺已经将自己的想法告知了俱乐部。.据悉，在奥布拉克可能离开的情况下，马竞有意引进莱诺作为替代者。此外，那不勒斯也希望签下莱诺以顶替老将雷纳。.如果莱诺离队，那么勒沃库森有意追逐法兰克福门将赫拉德基进行补强，后者和法兰克福的合同到今夏到期。. [ 来源 : 足球转会网 ] .\n',
  },
  {
    id: 10180,
    title: '书香羊城领读者 | 张桂光：“全城寻书”发起有助于城市阅读氛围的培育',
    source: '新快报·ZAKER广州',
    categories: '热点',
    createTime: '2018-4-26 08:15',
    content: '书香羊城领读者 | 张桂光：“全城寻书”发起有助于城市阅读氛围的培育\n.\n.\n.\n.\n.●领读者简介.张桂光：.广东省书法家协会主席 , 华南师范大学文学院教授、博士生导师.书香羊城领读者张桂光表示 , " 领读中国 · 书香羊城 " 全民阅读系列活动中的 " 全城寻书 " 形式很好 , 有助于城市阅读氛围的培育 , 吸引更多人关注阅读、参与阅读。.采访中，言及自己的读书习惯，张桂光教授表示自己读书没有规律可言，更多是分阶段进行，比如最近研究、关注的领域是什么，就会专注于一个领域阅读，沉下心来读通读透。对此，他还向记者推荐陈永正先生著作《诗注要义》，这是国内第一部较全面地论述中国古典诗歌注释学的专著，" 现在很多的诗歌创作与诗歌研究是分离的，但这本是既教你怎么读懂古诗，也教你怎么去写古诗，这本书读进去了会有很多收获。".除了推荐书目，张桂光教授还就城市阅读氛围的培育分享自己的看法，" 这样的活动举办的很有意义，能带动更多人参与阅读，对于城市来说，不管是学校、还是家长，还是全社会，都应该积极参与，培育城市阅读氛围，也为更好的阅读体验创造条件。"（新快报记者 王飞 黄婷 / 报道）（新快报记者 王飞 黄婷 / 报道）.\n',
  },
  {
    id: 10181,
    title: '曝侃爷与经纪人分道扬镳 出院后再陷精神危机？',
    source: '1905电影网',
    categories: '娱乐',
    createTime: '2018-4-26 08:15',
    content: '曝侃爷与经纪人分道扬镳 出院后再陷精神危机？\n.侃爷与经纪人分道扬镳.1905 电影网讯. 据外媒报道，" 侃爷 "Kanye West 继 2016 年被曝出精神方面出现问题后，最近再次被曝情绪不稳定。他向自己的管理团队包括经纪人 Scooter Braun 与律师们发出最后通牒，要求他们只帮自己工作，不能接其他客户，团队当然不服，于是 Scooter 与一大班帮手选择与他分道扬镳。.有知情人表示侃爷想建立全球最大的商业品牌，不过他最近再度陷入情绪不稳，行为古怪，但还未到 2016 年入院的程度。.而就在前几天，" 侃爷 " 在社交媒体沉寂多日后再度活跃，开启推特刷屏模式，宣布将在 6 月 1 日发布个人新专辑、6 月 8 日发布与 Kid Cudi 的合作专辑《Kids See Ghost》，还宣布重量级说唱歌手 Nas 的新专辑将在 6 月 15 日发布，他将亲自操刀整个专辑项目的制作。." 侃爷 " 在推特宣布一系列作品发布.网友纷纷表示 " 侃爷最近是闹哪样 "" 不管他跟团队发生了什么，我们听歌看作品就好 "。.\n',
  },
  {
    id: 10182,
    title: '巩俐亮相法国电影节 与 70 岁法籍男友甜蜜依偎',
    source: '1905电影网',
    categories: '娱乐',
    createTime: '2018-4-26 08:15',
    content: '巩俐亮相法国电影节 与 70 岁法籍男友甜蜜依偎\n.巩俐.1905 电影网讯.\xa0 美国洛杉矶当地时间 4 月 24 日，.巩俐.在 2018 届科尔科瓦法国电影节开幕式上亮相并拍摄了一组写真，并合影了大她 18 岁的法国作曲家男友让 · 米歇尔 · 雅尔（Jean-Michel Jarre），笑容温婉又大气。此外，同场出席的还有迈阿密风云的导演.迈克尔 · 曼.，粉丝调侃 " 带男朋友见老朋友，很好 "。.巩俐和男友合照.Jean Michel Jarre（让米歇尔雅尔），是全球知名的演奏家，作曲家，电子乐大师，有 " 电子音乐之父 " 之称，1977 年被《人物》周刊选为年度人物，1995 年还成为联合国教科文组织慈善大使，履历惊人。看来 " 巩皇 " 还是真爱艺术，和章娘娘一样喜欢和音乐人谈恋爱。.Jean Michel Jarre.\n',
  },
  {
    id: 10183,
    title: ' 小儿便秘别担心 推拿可以帮忙解决',
    source: '99健康网',
    categories: '健康',
    createTime: '2018-4-26 08:16',
    content: '小儿便秘别担心 推拿可以帮忙解决\n.小儿推拿治疗便秘是一种自然疗法，没有毒副作用，治疗中避免了家长担心的各种药物毒副反应，是一种有利无害的治疗方法。再者，小儿推拿治疗便秘安全稳当、见效快、疗效高。.小儿便秘常见热、阴虚、食积三种类型。根据小儿肝常有余，脾常不足、肺脏娇嫩的生理特点，治疗小儿便秘应补其不足、泻其有余，临床宜攻补兼施，以健脾行气通便为治则，可采用口服中药汤剂或推拿手法进行治疗。.小儿便秘推拿手法.清大肠：.大肠穴位于食指桡侧缘。操作时由虎口推向指尖，100～300 次。能治疗湿热、饮食、痰饮等停积肠道、气机受阻之便秘、腹中灼痛等。.退六腑：.六腑位于前臂尺侧缘，神门穴至肘成一直线。操作时，以中食指指腹，自肘关节推至掌根，100～500 次。能通腑泻热，滑肠泻下，用于阳明腑实之痞满燥实坚。.泻肝火：.找准血海穴 ( 双膝内侧 ) ，用双手拇指按摩 40 次左右。.补脾：.脾经位于拇指桡侧缘。操作时，由指根尖推向指根 300 次。能调理脾胃，加强脾胃运化功能。.捏脊：.从第一胸椎至尾椎，由下往上捏 30 遍。可调阴阳、理气血、和脏腑、通经络，凡脾胃虚弱之证，均可用之。以肝实为主的患儿，症见大便干结，便质干硬，形似颗粒，面赤身热，口臭，唇赤，小便黄，胸胁痞满，纳食减少，腹部胀，苔黄厚，指纹色紫。治宜顺气行滞，清润通便。.小儿推拿注意什么.1、小儿推拿适用于 0--14 岁的儿童，新生儿也可做推拿。.2、做小儿推拿时，应选择避风、避强光、噪音小的场所；室内应保持清静、整洁，空气清新、温度适宜。儿童接受小儿推拿后，应注意避风，忌食生冷。.3、做小儿推拿时，医生、小儿推拿师或家长要保持双手清洁，摘去戒指、手镯等饰物。指甲要常修剪，刚剪过的指甲，一定要用指甲锉锉平。冬季推拿时，双手宜暖。.4、小儿过饥或过饱，均不利于小儿推拿疗效的发挥。在小儿哭闹之时，要先安抚好小儿的情绪，再进行小儿推拿。.5、小儿皮肤娇嫩，小儿推拿时切勿抓破小儿皮肤。小儿推拿一般可使用按摩油、爽身粉、食用淀粉等介质，以防推拿时皮肤破损。.6、小儿推拿手法的操作顺序：一般先头面，次上肢，再胸腹腰背，最后是下肢；也可先重点，后一般；或先主穴，后配穴。.拿、掐、捏、捣等强刺激手法，除急救以外，一般放在最后操作，以免小儿哭闹不安，影响治疗的进行。.小儿推拿手法操作时间的长短，应根据病情、体质而定，因病因人而异。在临床实践中推法、揉法运用较多，做摩法用的时间较长。运用掐法、按法时，手法要重、少、快。如果仅推拿一侧手部穴位，可不论男女，均推拿左手。.7、一般情况下，小儿推拿一次总的时间为 20--30 分钟。但是由于病情和小儿年龄的不同，在推拿次数和时间上也有一定的差别。年龄大、病情重，推拿次数多，时间相对长。反之，次数少，时间短。一般每日 1 次，重症每日 2 次。需长时间治疗的慢性病 7 天至 10 天为 1 个疗程。1 个疗程结束后，可休息数日，然后进行下一个疗程的治疗。.做小儿推拿，针对不同的系统，可以进行每日 1 次或隔日 1 次的规律性推拿。做保健推拿时，穴位可以相对治疗时少取，刺激程度应略低，时间可以保持在 15 分钟左右。.8、小儿推拿手法的基本要求是：轻快、柔和、平稳、着实。.9、在施行小儿推拿手法时，医生、小儿推拿师或家长要注意小儿的体位姿势，原则上以使小儿舒适为宜，并能消除其恐惧感，同时还要便于操作。.10、小儿推拿的禁忌证有：骨折、创伤性出血；皮肤破损、皮肤溃疡；烧伤、烫伤；急性、烈性传染病；癌症及危重病症等。.11、每次给孩子做小儿推拿最好只针对一个问题，如果保健和治疗目的太多、推拿的穴位太杂，会影响最终效果。.12、医生、小儿推拿师或家长做推拿时，要集中精力、专注来做，即要全幅慈心善念、无半点浮词燥气。.13、最后一点，也是最重要的一点，小儿推拿治疗前，必须有明确的诊断。如果家长或小儿推拿师不能肯定，请先送医院就诊 ! 小儿疾病，瞬息万变、刻不容缓，请不要疏忽大意。.\n',
  },
  {
    id: 10184,
    title: '“碰瓷哥” 开发区出没 收完钱 20 米外又碰一车',
    source: '半岛晨报',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '“碰瓷哥” 开发区出没 收完钱 20 米外又碰一车\n.斑马线上，面对礼让的车辆，行人摆摆手示意车辆先过，结果车刚一启动，" 礼让 " 的行人一下子又撞在了车上，24 日，本报报道了市民刘先生在保税区轻轨站附近疑似遭遇碰瓷的事儿。事件一经公布，市民王先生表示自己在开发区也遇到了类似的事儿，而且竟然是同一人。.又有车主遇到同样的碰瓷者 .刘先生表示，事发路段没有监控录像，也没有信号灯，但是自己车里有行车记录仪，因此当时态度比较明确，而 " 被撞 " 男子在听说有行车记录仪后，以 " 还要上班 " 为由离开，奇怪的是，其离开的方向与原本行走的方向相反，这让他更加确定遇上了碰瓷者。这事儿发生在 4 月 17 日 7 点多，地点位于保税区轻轨站附近。.市民王先生告诉记者，他遇到的情况发生在 4 月 8 日早晨 7 时许，地点在开发区安盛购物广场附近。王先生表示，当时看到有人在斑马线上行走，他停车让行，结果行人也摆摆手，示意他先过，结果车刚一启动，男子撞在了上面。.王先生的车上也安装了行车记录仪，记者查看发现事发经过和其描述的一致，而且男子被撞时的动作假的比较明显。." 被撞者 " 不关心身体关心误工费.王先生告诉记者，事发后被撞男子一瘸一拐上了他的车，埋怨其 " 咋开的车，路上有美女啊 "。.对话录音显示，当时王先生的语气相对要弱，而男子的态度比较强硬，甚至质问王先生 " 怀疑我碰瓷咋的 "，而且主动提出要找交警。.录音显示，对话中男子提出 " 工地一天给我 200 块钱，你给我报啊 "。对此王先生提出帮他请假，然后找医院去看看，但是男子并不关心病情，倒是再次质问 " 工地的工钱谁给我包 "。.王先生告诉记者，当天自己有事儿比较着急，因此没有报警，想着花点钱通过私了解决。经过协商，小王同意给对方 200 块钱，但是因为没有现金，需要去单位取。.收完钱离开 20 米又碰一个.然而去单位的路上，男子又改口了，要 300 块钱，王先生表示当时男子以 " 否则就报警 " 相威胁，但是当王先生表示 " 报警就报警吧 "，其又不再强硬，最终王先生还是赔偿给他 200 元。.王先生告诉记者，当时自己并没有觉得有太多的不对劲儿，到单位后和同事沟通，结果得知同事徐先生当天早晨在单位附近也遭遇了同样的事儿，而且两人遇到的是同一个人 " 我给完他钱，他离开也就 20 米，就找我同事的车又撞了。" 王先生称。经过沟通两人才意识到，遇上碰瓷儿的了。.而在看到刘先生的行车记录以后，他们发现遇到的碰瓷者仍然是同一个人，甚至连衣服都没有换。.网友：是惯犯经常在开发区出没.本报 24 日早通过微信推送了刘先生的新闻，不少网友留言表示 " 是个惯犯 "，.网友 BIG SHENG 留言称 " 这哥们以前在开发区医院路口干这事儿都出名了，还以为改行了呢，原来是换地方了 "。.网友 " 陈年老腊肉 " 表示 " 这伙计还在碰瓷呢，前一天早晨在开发区安盛公交站人行道上和麦凯乐人行道那里碰瓷 "。.网友 " 玲 " 表示 " 在开发区新辰里也见过一个一模一样的手法，看着装怀疑是一个人 "。.事发后，网友表示，遇到这样的事儿该去医院就去医院，该报警报警，千万不要怕麻烦选择私了。另外很多网友意识到安装行车记录仪的必要性——一旦发现纠纷，是还原现场最有力的证据。.另外，已经吃了亏的三位车主，也希望通过本报提醒碰瓷者能够悬崖勒马，" 不要拿着生命安全开玩笑 "。.半岛晨报、 海力网记者于雅坤文 / 图.\n',
  },
  {
    id: 10185,
    title: '带娃出游 宝宝安全座驾慎重选',
    source: '太平洋亲子网',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '带娃出游 宝宝安全座驾慎重选\n.五一小长假快到了，许多家有宝贝的爸爸妈妈已经开始计划出游了。可以选择一个有山有.水.的湖景或海边，或者是原味民宿；还可以呼朋引伴，约上有同龄宝宝的朋友，来一场悠然美好、温情融融的短途自驾游。.图片来源：视觉中国.当然，带娃出游要首先保证宝宝的安全、舒适，" 座驾 " 的选择就非常重要了。.如果你的宝宝不太大，并且你还有 " 二宝 " 计划的话，可以选择专为新生宝宝设计的.摇篮.式.安全座椅.，利用率足够高。这种安全座椅配有专用的固定架，需要安装在车内。" 座驾 " 底部可以摇摆，带给宝宝更平稳、舒适的乘车感受；这款安全座椅还可以当.提篮.使用，到达出行目的地时提起宝宝就可以了。.推荐理由：座椅设计还原自然坐姿，基于人体工学的再优化设计，引入全新护颈片概念，时刻让宝宝的颈部平稳着地，顺应天性的婴儿平躺模式，让宝宝安全舒适出行。.如果处于经济划算的考虑，家长可以考虑购买一款多功能儿童安全座椅，这种儿童安全座椅可以陪伴宝宝到 4 岁左右。在宝宝满 1 岁前，安全座椅一定要反向安装，当面临碰撞时，可以将其转化为反面碰撞，座椅靠背可以托住宝宝的头部和颈部，达到良好的保护效果。.推荐理由：座舱可 360 度自由旋转，并有支撑腿安装系统，自带 ISOFIX 系统，安装方便 ; 座椅可以无干扰 7 档倾斜雕节，正反安装，自由转换，适合 0-.4 岁宝宝.安全出行使用。.图片来源：视觉中国.儿童安全座椅一般时根据儿童的.体重.来分类的。摇篮式的儿童安全座椅一般适用于体重在 2.2-13 公斤的宝宝，即新生儿到 15 个月左右的宝宝。宝宝满 1 岁以后，身体.骨骼发育.良好，一般可以自己坐起来了，爸爸就可以将安全座椅正向安装，固定在车内使用。.儿童座椅的安装位置以后座中间为佳，碰撞实验表明，这里是车内最安全的位置。作为家用电器 " 修理工 "，动手能力比较强的粑粑要在安装座椅时更加细心，确保零件安装到位，不会松脱。旅途中，一些顽皮的宝宝会自己解开安全带，家长一定要随时检查。.推荐理由：专为 9 月— 1.2 岁宝宝.设计，采用进口 HDPE 一体吹塑骨架，提升韧性强度，确保品质。加强式侧翼防护系统设计，有效吸收侧撞冲击力，更好地呵护宝宝。.除了儿童安全座椅，家庭出行的另一个必备座驾自然是儿童.推车.了。外出旅行也好，出门逛街也好，如果家长随时随地都要抱着宝宝，尽管是亲生的，那也是重量啊！市面上现有的婴儿推车一般都有可折叠设计，并考虑了重量、安全性等，带娃出门时，即便妈妈不是女汉子也能轻松使用。.推荐理由：设计人性化，一拉折叠，方便出行。黄金三角结构，经 7500 次负责路面测试，不易侧翻，能帮助宝宝锻炼平衡感。.有这些安全 " 座驾 "，爸爸妈妈就可以放心带娃出游了！.\n',
  },
  {
    id: 10186,
    title: '孕初期“胃痛”？可以这样应对',
    source: '太平洋亲子网',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '孕初期“胃痛”？可以这样应对\n.很多刚怀孕的准妈妈都会经历孕早期的妊娠呕吐反应，可能还时不时地感觉胃部有些灼热和发痛，而胃部的不适感可能又会加重准妈妈的孕吐反应，导致准妈妈们觉得难受。.图片来源：视觉中国.这是因为怀孕之后，由于身体内多种激素分泌随之增加，肠胃的平滑肌张力受到影响而降低，肠胃蠕动减少，胃酸及胃蛋白酶分泌量减少，准妈妈的食道下段括约肌的紧张度也因此而降低，所以酸性分泌物反流至食道下部，引起了胃部或者食道会有一种嗳酸烧灼感或者疼痛感。如果准妈妈在孕期已经患有慢性胃病，那么可能还会在怀孕期变得严重。.那么，如何应对孕早期的 " 胃痛 " 症状？可以尝试以下的几个方法哦。.1. 注意饭后休息时间.在中午时分，很多人都会在吃完午饭后立即就进行午休。可是准妈妈们刚吃饱时，可不要立即躺下休息。因为吃饱立即躺下时，胃里的食物可能经食道返流，引起食道烧灼感，还可能使胃部嗳酸，很容易引起胃痛。孕妈在午饭后不如散散步，大概 20-30 分钟之后再休息。散步是一项孕期极好的运动，不仅有利于妊娠期血糖控制，还能有助于胎宝宝的发育。.图片来源：视觉中国.2. 注意饮食上的控制.怀孕初期还不需要大补，加上准妈妈都会有孕吐反应，吃进去的高营养食物未必能得到很好地消化和吸收。所以建议孕妈饮食上清淡一些，荤素搭配适宜，少吃酸辣、油炸和肥腻食物，以免引起胃酸过多或者不消化。建议准妈妈在孕早期少吃多餐，这样还可以减少胃部的负担，避免胃痛发作。.3. 注意睡觉的姿势.如果入睡时感觉胃部不舒服，准妈妈还可尝试采用侧睡的姿势，因侧睡时身体处于放松状态，减轻对胃部的压迫，缓解胃部不适。.准妈妈还需注意，如果反复胃痛或者胃痛严重到影响正常作息，那就需要到医院就诊，咨询医生是否使用一些胃黏膜保护剂或抗酸药来治疗胃痛。孕期用药需谨慎，千万不要自行用药哦！.\n',
  },
  {
    id: 10187,
    title: '辣么多兴趣班 该让宝宝上哪',
    source: '太平洋亲子网',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '辣么多兴趣班 该让宝宝上哪个\n.如今的父母对宝宝的早期教育非常重视，为了不错过宝宝的每一个发展契机，忙不迭地想要为宝宝报名参加各种兴趣班、培训班。只是，面对门类、名目繁多的兴趣班，家长也难免手足无措，到底应该让宝宝学什么？宝宝的早期教育内容非常广泛，涵盖宝宝的体能、智能和心理等多个方面。了解宝宝的发展规律和个性兴趣，才能选对学习内容，让宝宝健康成长。.图片来源：视觉中国.不同年龄的宝宝适合学什么 ?.一般来说，宝宝三岁进入幼儿园后，就可以先尝试一些兴趣班了。但是，宝宝四岁以后，接受能力才更强，此时正式开始进入兴趣班，更适合宝宝的身心发展规律，有利于提高学习效率。.2~3 岁是宝宝学习口头语言和计数发展的关键年龄，2 岁半 ~3 岁半则是让宝宝学 " 规矩 " 的关键年龄，早教重点是养成良好的卫生习惯和作息习惯。宝宝在 4 岁以前，是形象视觉发展的关键年龄，4~5 岁重点是开始学习书面语言；5 岁左右是宝宝掌握数学概念的关键年龄，也是儿童口头语言发展的第二个关键时期，之后，也是宝宝掌握语言词汇能力的关键时期。.家长在为宝宝选择兴趣班时，必须要注意宝宝年龄，不要超前，也不要滞后。比如，音乐本身是一种语言，让孩子把听到的讲出来是最好的语言能力训练。根据宝宝的发展规律，宝宝在 3-4 岁可以学一学唱歌表演，如果要学习乐器，最好在 4 岁以后，而声乐（童声训练）训练则要在 7-8 岁左右开始。.幼儿处在身体骨骼发育的关键期，如果要学习绘画（儿童画），可以从 4 岁左右开始。但是，建议先让宝宝使用蜡笔或油画棒来画画，以免宝宝以后握笔出现问题。而诸如硬笔和软笔书法等学习，就需要等宝宝的骨骼发育相对成熟时开始，比如 7 岁左右。.而围棋、轮滑和跆拳道等兴趣学习，有助于宝宝的智力、注意力和体能发展，可以适当早一些开始，5 岁左右就可以开始。.如何为自己的宝宝选对兴趣班 ?.让宝宝上兴趣班不能盲目跟风，看到别人家的孩子学什么，就希望自家宝宝也能学会。" 牛不吃草强按头 " 的结果，家长不难想象。家长要根据宝宝的兴趣爱好和潜能，和宝宝商量约定地去选择兴趣班。否则，不仅宝宝学得艰辛痛苦，还可能恶化亲子关系，大把的钞票和时间也浪费了。.宝宝的兴趣爱好其实在生活中不难观察发现，比如安静的宝宝一般比较有耐心，平时玩一个拼图游戏自己都能玩很久，也能注意到一些细节。这类宝宝就适合学围棋、数学或科学实验等兴趣班，有利于促进宝宝的逻辑思维能力。有些宝宝听到或看到电视机里的音乐和舞蹈，就会随之手舞足蹈，这是多么明显的倾向。这类宝宝模仿能力强，对音乐旋律比较敏感，适合学习声乐和乐器等。.表现欲望强烈的宝宝在人多的场合，会特别活跃，平时表情丰富，喜欢被注意等，这类宝宝就适合学习舞蹈、表演等。而适合学画画的宝宝，在生活中会对颜色比较敏感，强烈的视觉刺激很容易吸引宝宝的注意力。有些宝宝还会喜欢收集漂亮的玩偶，比较 " 臭美 "，坚持自己选择穿什么衣服。.选择了兴趣班以后，更重要的是家长的心态。不要希望宝宝通过兴趣班就能 " 成名成家 "，宝宝的早期兴趣学习，目标应该是为了促进宝宝的全面发展，发现和促进宝宝的潜能。宝宝有兴趣，有动力，才能更好地坚持去兴趣班学习。.\n',
  },
  {
    id: 10188,
    title: '期中考试，家长如何帮助孩子备考 ? 一定要看！',
    source: '神墨亲子苑',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '期中考试，家长如何帮助孩子备考 ? 一定要看！\n.这段时间，家长最关心的就是孩子的期中考复习了。.孩子平时成绩不错 可一到大考就考砸，问原因，孩子竟然说，每次一上考场就头脑一片空白，全忘了。孩子是不是怯场，一直鼓励他：" 不要紧张，你肯定能比上次考得好。" 结果考得比以往都差。期中考马上就到了，孩子的复习一团乱，再考不好可怎么办？原来他犯了几个很多孩子都会犯的错误！.如果犯了这 3 个错误，孩子想要考高分基本不可能！.●复习不到位.分析试卷的时候，我发现这孩子错的很多是基础题，有的甚至是课本上的例题。由此可看出，这孩子没有复习到重点，一些基础知识点没有熟练掌握。.●考场答题不细致，问题百出。.另外，这孩子经常把乘号看成加号，数字抄错，单词拼错。这些分都是白丢的，真是丢得让人可惜又可气。.●过度紧张，临场发挥差。.孩子考试时容易着急，经常看到问题头脑一片空白，有的甚至手心冒汗，握笔发抖。归根到底是孩子的考试心态没有摆好，把成绩看得太重，这也跟家长的严格要求有很大的关系。.曾经有个女孩，因为身体瘦弱，体育课上跑步成绩总是落后。知道孩子的困扰后，孩子妈妈没有鼓励她说：" 孩子，别紧张，你肯定比上次跑得快。" 而是告诉她：" 孩子，你下一次的目标就是只追前一名 "。.后来这个孩子不仅不害怕跑步了，还考进了北京大学，并被哈佛大学以全额奖学金录取，成为当年哈佛教育学院录取的唯一一位中国应届本科毕业生。 只追前一名，这个小目标不会给孩子带来过大的压力，还把目标具体化了，让孩子有了努力的方向。要想让孩子正确对待考试，家长们就要改变自己的心态，告诉孩子：.这一次，你只要前进一名就好。.做好考前复习，要记住这 3 句话.●生活作息 ：\xa0 考前大变样要不得.1. 帮孩子调整好生物钟。.很多孩子考前希望拼时间多看点书，这种做法不可取。不仅会影响听课效果，还会导致记忆力、专注力下降，对考试来说特别不利。不早睡不晚睡，正常作息就好。考前保证 8 小时的睡眠是重中之重。\xa0.2. 合理饮食，加强锻炼。\xa0.三餐保证营养均衡，不让孩子吃过多油腻的食物。切忌给孩子吃各种补品，再多的补品都不如每天一个小时的锻炼。.●考前复习 ：.小考小玩，大考大玩最可怕！ 很多孩子考前都是一团乱，想起什么复习什么。没有计划的学习根本没有效果，高效复习要做好这几步。.1. 回归课本，巩固基础。.必须牢牢记住一点：课本是复习的重要工具，所有题目都万变不离其宗。因为出卷老师拿到的参考资料就是课本。提醒孩子在考前根据课本目录，进行知识梳理和巩固。 回归课本时尤其要注意这些细节：.（1）必须要看的知识点有：概念、原理、规律 ( 包括法则 ) 、专业术语、过程或步骤等。.（2）每个知识点后面的例题和拓展题必须要求孩子弄懂！.2. 回顾试题，查缺补漏。\xa0.家长可以让孩子把平时的试卷，按照课本上知识点的先后顺序进行整理，然后把试卷上的错题再做一遍。如果有错题本的话，这个时候就可以派上用场了。.3. 适当练习，保持做题的手感。.●应试技巧：.临时抱好佛脚，照样能得高分！ 有的孩子前两点都做得很好了，但还是考不好，关键原因在于没有掌握正确的考场技巧。这 4 个技巧，您孩子知道吗？.技巧一：.拿到试卷先做啥 ? \xa0.拿到试卷第一步先检查试卷是否有错，比如漏页、错印等。顺便看一下有哪些题型，大概考到了哪些知识点，不必要花太多时间，只为了心里有个底。.技巧二：.规范答题，保证时间.。.请一定保证书写工整、卷面清晰，这就要求孩子们平时多练字了。同时，一般来说，做题要按照试卷顺序来做，避免漏题和错答。.技巧三：.哪些题需要放弃 ?.\xa0 遇到难题时，如果没有头绪或者耗费时间过长，就应该先放弃，做会做的题。比如说，每题有 10 分钟的解答时间，如果一道题花费了约 3~4 分钟还没有思路，就要先放弃。 先把基础分拿到，做完后再来解决难题。如果是数理化的大题，实在不会做，可以把相关的公式列出来，一般也能拿到 1-3 分。.技巧四：.要养成检查的习惯。.粗心和马虎是数学考试常见的扣分点，写完之后必须要检查的地方有：\xa0.（1）公式有没有写错；\xa0.（2）算式中的数字有没有抄错；.（3）计算对不对；.（4）答案有没有誊写错；\xa0.（5）填空题有没有遗漏单位。.只要孩子能做到这些，考试时基本上就不会犯一些低级错误，白白丢分。我们一定要丢掉 " 我孩子很聪明，就是太粗心 " 的观念。哪有什么粗心，所有的粗心都是知识点和考试技巧掌握不到位的借口。.最后也是最重要的，我们要知道，有针对性地查缺补漏，才是考前复习中最关键的一点。因为每个孩子的知识漏洞不一样，欠缺的考试技巧也不同。.本图文版权归原作者及原出处所有，内容为作者观点，并不代表本公众号赞同其观点和对其真实性负责，也不构成任何其他建议。如涉及作品内容、版权或其它问题，请及时与我们联系，我们将立即更正或删除相关内容。.关注父母世界，关注家庭教育.关注——亲子苑.与您一起分享不一样的育儿教育！.\n',
  },
  {
    id: 10189,
    title: '陪伴是给孩子最好的礼物，多少孩子父母双全，却活得像孤儿',
    source: '神墨亲子苑',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '陪伴是给孩子最好的礼物，多少孩子父母双全，却活得像孤儿\n.真正的陪伴，不拘泥于时间的长短，也不限制方式和方法，最重要的是让孩子感受到，你的爱和陪伴。.陪伴，听起来容易.做起来却不是那么容易.在新的《妈妈是超人》里，最让人心疼的孩子，应该是黄圣依的儿子安迪。.从最初开播的时候，他和黄圣依的生疏让人吃惊。被问到 " 爸爸妈妈不陪你的时候怎么办 " 时，他说出 " 我已经习惯 " 的答案，让人听了都唏嘘。.最近，他去参加入学面试的时候，被几个老师轮流问到英语、逻辑、数学等知识问题，他都对答如流，让老师和黄圣依忍不住默默赞叹。.这时，老师又问了一个问题：在上幼儿园或者家里的时候，最让你开心的事有没有？.此时安迪皱起了眉头思索良久，却还是沉默，当老师再追问时，他说 " 没有 "。.听到儿子说没有，站在门外偷看的黄圣依脸上表情有点尴尬，也有点肃静。.其实，对于大多数孩子来说，最开心的时刻就是能跟爸爸妈妈一块儿玩的时候，只是这样的时光，对于从小就养在爷爷奶奶家的安迪来说，是奢侈的。就连老师在跟黄圣依交谈的时候，也希望她能多抽空陪陪孩子。.陪伴，非常简单的两个字，做起来却不是那么容易。.有些陪伴不但无效.还会起反作用.陪伴的缺失，尚且还有办法补偿，只要用心地去跟孩子沟通交流，孩子总有敞开心扉接纳的一天。.但是，有种陪伴，不仅不能让孩子开心快乐，还会给孩子带来阴影。.陈乔恩就是在这种阴影下长大的。她提到童年的时候，是这样描述的：经常被妈妈呼巴掌，被妈妈用枯树枝捆成一把打下来，打得狠会见血。在这样的棍棒教育下长大的陈乔恩，对母亲的感觉，恐惧是占大部分的。.尽管离开童年很久，但那样的生活对于陈乔恩来说，是无法磨灭的阴影。以至于她和妈妈一起上节目的时候，大多数的情况都是相对无言，谁也不说话，气氛很尴尬。.在陈乔恩的心里，童年的记忆是她永远都无法打开的心结，也许关系会缓解，但从前的伤口不会平复。.我在图书馆的少儿阅览室碰到过一个小女孩，总是留到图书馆关门才回家。有一次跟她聊起来的时候，她告诉我说不想回家。我以为家里没人她才不愿回去，仔细一问，才知她爸妈都在家，.但是她不喜欢跟爸妈待在一起。." 他们总说我笨，说我不爱动脑子，还说我懒，反正我做什么都不对，那还不如不让他们看到我。" 孩子才七八岁，但言语是里满满的委屈，听着就让人心疼。.明明有父母陪伴在身边，却总是不被父母认可，还被贴上很多的负面标签，这样的相处，的确给人很大的压力。.其实现在像这样的家庭也很多，明明跟孩子有充足的时间在一起，但却无法做到有效的陪伴，甚至会让孩子有种被禁锢的感觉，这种就可以称作是低质量的陪伴了。.对孩子们来说，这种陪伴还不如没有好。.好的陪伴，要走心.人世间最美的陪伴莫过于 : 父母对孩子的陪伴、孩子对父母的陪伴、爱人对爱人的陪伴.今天我想和大家一起来聊聊父母对孩子的陪伴.父母的陪伴可以说是家庭教育中 " 热搜 " 的关键词了。.每当一些孩子性格出现内向、胆小、爱哭、粘人等问题的时候，教育专家最常说的一句就是 : 父母要多陪陪孩子。.然而不同的父母陪伴的方式也不尽相同，不同的方式带给孩子感受也截然不同。根据我们日常生活的经验中大多数父母的陪伴方式来看，大概可以分为以下三种 : 身在心不在，心在身不在，身心都在！.前两天在微博上看到一条很扎心的微博 : 一个孩子在作文《说说心里话》中控诉道 :.爸爸妈妈宁愿和网上不认识的人聊天，也不愿意放下手机。.看到这里我不由得想起了现在去饭店吃饭时的一个场景 :.一家三口一桌而坐，哇！多么温馨的画面，一家三口低着头仿佛在窃窃私语，但走近一看，寒冷至极 : 爸爸妈妈一人一手机，时尔微笑时尔蹙眉，眼里早已被手机塞满，而孩子则在一旁孤独的坐着，时尔发呆时尔观望，无奈和落寞在小脸上一览无余 ....其实这样的情景在手机互联网时代已经屡见不鲜了，不仅仅在饭店里、在路上，在家里，等等任何有大人和孩子的地方都能看到，颇有一种 : 人生得一手机就足以的感觉。.跟上潮流跟上时代本没有错，但让人痛心的是让孩子成为了追赶时代的牺牲品，父母在身边玩着，孩子在身边看着，然后还冠冕堂皇的说 : 我就是在陪孩子啊！.原来有的家长走入了一个误区，认为只要做在孩子的身边就是陪伴。.殊不知，人是情感动物，这种身在心不在的 " 身体陪伴 " 缺少了情感的支撑，无疑等于是父母在扮演一个守门员的角色，爱之球被挡在了门外。.还有部分父母是心在身不在，抱着 " 孩子就应该有自己玩的空间 "，孩子在前面玩，父母在后面眼睛一眨不眨的盯着孩子，一会喊道 " 宝贝，这个别动 "" 那个别碰 "" 不能这么玩，危险 " 等等，哇塞，好一个尽责尽职的父母，随时精神紧绷就一个想法 : 一定要看好孩子，不能伤了孩子。.既然要让孩子自己玩的空间，那就不要做这种身不在心在的 " 监控人 ": 一会这不能一会那不好，让孩子自己去探索和成长，否则这种看似的陪伴其实一种 " 审判 "，一样让孩子感受不到你的爱。.如果你决定要陪伴孩子，那就请你放下手机，放下手段，走到孩子身边并蹲下来，把自己放在和孩子一样的高度，把心交给孩子，和孩子玩成一团，用心去交流，这才是陪伴的内涵——心灵相通.著名作家龙应台曾说 : 父母跟食物一样，都是有期限的，然而食物过期可以在买，但孩子的成长只有一次，没有第二。.相信大家都不想错过孩子的成长，我们也都想多陪伴孩子，可惜的是大多数父母却没有注意到 : 自己竭尽可能得花时间陪在孩子身边，却没有达到陪伴的真正目的。.陪伴，不仅仅是 " 陪在娃身边 ".也许在你工作疲倦之后，听孩子讲述下他在学校的趣事，或者分享一下自己的辛苦工作，来一次愉快的聊天，这也是陪伴。.当孩子沉浸在平板电脑或手机视频里的时候，你邀请孩子一起出去打会儿羽毛球或者篮球，这也是陪伴。.陪伴，可以发生在任何相处的时候，用心去跟孩子相处，孩子才能真真切切地感受到你的爱，所以，别再怪那个爱唱反调的小孩了，先看看，有没有给够他高质量的陪伴吧。.本图文版权归原作者及原出处所有，内容为作者观点，并不代表本公众号赞同其观点和对其真实性负责，也不构成任何其他建议。如涉及作品内容、版权或其它问题，请及时与我们联系，我们将立即更正或删除相关内容。.关注父母世界，关注家庭教育.关注——亲子苑.与您一起分享不一样的育儿教育！.\n',
  },
  {
    id: 10190,
    title: '苹果 CEO 库克将会见特朗普 曾督促中美解决贸易分歧',
    source: '中金网',
    categories: '首页',
    createTime: '2018-4-26 08:16',
    content: '苹果 CEO 库克将会见特朗普 曾督促中美解决贸易分歧\n.摘要：.据彭博社北京时间 4 月 25 日报道，苹果公司 CEO 蒂姆 · 库克 ( Tim Cook ) 将于周三在白宫与美国总统特朗普举行私人会谈。眼下，苹果正寻求阻止中美之间正在酝酿中的贸易战爆发。.据彭博社北京时间 4 月 25 日报道，苹果公司 CEO 蒂姆 · 库克 ( Tim Cook ) 将于周三在白宫与美国总统特朗普举行私人会谈。眼下，苹果正寻求阻止中美之间正在酝酿中的贸易战爆发。.根据美国白宫发布的总统官方日程表，库克将于当地时间周三午后在美国总统办公室与特朗普举行私人会谈。此次会谈不会对媒体开放。.特朗普政府决定对多达 1500 亿.美元.的中国商品征收关税，这加剧了中美之间的贸易紧张态势，可能会影响到苹果亚洲业务。苹果复杂的生产链条以中国为中心铺开。.上月，库克在北京参加中国发展高层论坛时对与会者称，他希望中美能够解决贸易分歧。" 拥抱开放的国家才能取得成功，拒绝开放的国家则会失败。只有通过合作才可以把蛋糕做得更大，而不是争夺蛋糕。我认为沉着才能战胜一切，" 库克表示。.中美之间的贸易战可能会导致苹果成为中国报复的目标。上月，中国官媒称，如果贸易战爆发，苹果将是 " 最受伤 " 的美国公司之一。.周二晚间，库克出席了特朗普担任总统后的首场国宴，这场国宴为接待法国总统马克龙而举行。库克与苹果环保和政府事务副总裁丽莎 · 杰克逊 ( Lisa Jackson ) 一起参加了这场国宴，后者曾在奥巴马总统任期担任环保局局长。.更多优质内容，关注中金网微信公众号：cngold-com-cn（长按复制），或在应用商店下载中金网 APP。.苹果尚未置评。.责任编辑.天子溪.\n',
  },
  {
    id: 10191,
    title: '外交部：欢迎美方来访就中美经贸问题进行对话磋商',
    source: '腾讯财经',
    categories: '首页',
    createTime: '2018-4-26 08:17',
    content: '外交部：欢迎美方来访就中美经贸问题进行对话磋商\n.外交部发言人陆慷主持 4 月 25 日例行记者会。陆慷表示，关于美方最近表示姆努钦财长来华就中美经贸问题进行对话磋商，上次我在这已经说过了，中国商务部新闻发言人已经表明过中方的态度，我们收到了美方希望来华就经贸问题进行谈判的信息，中方是欢迎的。我在这可以再次重申，我们对此表示欢迎。.回顾中美贸易战.\n',
  },
  {
    id: 10192,
    title: '历史上看， 降准 6 个月后地产大概率跑赢市场',
    source: '金汇财经',
    categories: '首页',
    createTime: '2018-4-26 08:17',
    content: ' 历史上看， 降准 6 个月后地产大概率跑赢市场\n.* 本文作者海通证券分析师涂力磊、谢盐，原文标题《历史上看， 降准 6 个月后地产大概率跑赢市场》。*.1. 央行降准，保障市场流动性.中国人民银行决定，从 2018 年 4 月 25 日起，下调大型商业银行、股份制商业银行、城市商业银行、非县域农村商业银行、外资银行人民币存款准备金率 1 个百分点；同日，上述银行将各自按照 " 先借先还 " 的顺序，使用降准释放的资金偿还其所借央行的中期借贷便利（MLF）。.中国人民银行将继续实施稳健中性的货币政策，保持流动性合理稳定，引导货币信贷和社会融资规模平稳适度增长，为高质量发展和供给侧结构性改革营造适宜的货币金融环境。.我们认为，.本次降准可以增加长期资金供应，银行资金成本将有所降低。置换 MLF 使商业银行付息成本有所减少，有利于降低企业融资成本。同时降准有望释放 4000 亿元增量资金，增加了小微企业贷款的低成本资金来源。.2. 信号意义重大，体现央行保障流动性决心.央行在当前时点降准，体现稳定市场流行性决心。.考虑到内外经济环境的变化，预计未来市场流动性将继续保持中性稳健，进一步收紧的可能性不大。.此外从历史惯例看，央行一旦开始降准周期，频率上一般采取年内至少两次。我们预计未来央行还将继续投放流动性。.2.1 地产行业 1Q 表现尚可.从销售和投资端看，2018 年 1 季度房地产行业整体表现尚可。.2018 年 1-3 月全国房地产累计开发投资为 21291 亿元，同比增长 10.40%，增速比 1-2 月份提高 0.5 个百分点。1-3 月商品住宅投资 14705 亿元，同比增加 13.30%，增速比 1-2 月份提高 1 个百分点。.1-3 月商品房销售面积 30088 万平方米，同比增长 3.63%，增速比 1-2 月份回落 0.5 个百分点。其中，住宅销售面积增长 2.5%，办公楼销售面积下降 2.8%，商业营业用房销售面积增长 9.6%。.2.2 资金收紧现象明显.虽然投资和销售保持增长，但是在整体金融去杠杆背景下，房地产行业资金面呈现明显紧张趋势。.1-3 月全国房地产资金来源总量达到 36770 亿元，较去年同期增长 3.09%，增速比 1-2 月份回落 1.7 个百分点。1-3 月房地产资金来源中的国内贷款达到 6957 亿元，累计同比增加 0.94%。个人按揭贷款达到 5160 亿元，累计同比下降 6.82%，增速连续五个月回落。.本次降准时房地产投资和销售增速相对尚可接受，但行业资金面处于收紧之中。为防范 1Q 资金收紧后的潜在经济下行风险，央行采取了提前降准的举措。.3. 降准周期中地产销售和地产股表现优异.3.1 基本面表现情况：首次降准 6 个月之内销售明显改善.从历史规律看，降准对于行业销售有直接刺激作用。通过比照 2008 年、2011 年和 2015 年三次降准周期可以看到，三次降准之后行业销售均存在明显恢复，持续恢复时间在 1 年以上。.3.2 股价表现：降准后第 1 个月、第 3 个月到 6 个月表现最佳.从历史规律看，A 股地产指数在降准之后表现不俗。.具体来看，过去三次降准周期累计发生 13 次降准行为。.各降准时点发生后六个月左右，A 股地产指数 60% 以上概率取得绝对收益和 80% 以上概率取得相对收益。.行业基本面改善预期将直接刺激二级市场地产指数。特别是降准周期的首次降准无论对于地产行业实体面还是二级市场面均有较大的改善意义。.4. 低基数结合推盘季，继续看好地产蓝筹.我们认为，今年 2 季度中下旬属于开发商 1H 传统推盘期，目前开发商对市场价格预期平稳，后期抢种抢收属大概率事件。同时，我们认为，本次降准有利于增加市场流动性，对开发商推盘去化也有一定的助益。此外，考虑 17 年同期行业一二线进入强调控期，行业低基数效应有望推升上市公司后期基本面。.\n',
  },
  {
    id: 10193,
    title: '中种椰蓉排包',
    source: '好豆网',
    categories: '首页',
    createTime: '2018-4-26 08:17',
    content: '中种椰蓉排包\n.好像每个面包店都会有椰蓉面包，浓浓的椰香，金黄色的外表，柔软的口感，足以让人着迷。.简介.好像每个面包店都会有椰蓉面包，浓浓的椰香，金黄色的外表，柔软的口感，足以让人着迷。.食材.种面团高筋粉、种面团牛奶、种面团淡奶油、种面团细砂糖、种面团酵母、主面团高筋粉、主面团牛奶、主面团蛋液、主面团细砂糖、主面团奶粉、主面团盐、主面团黄油、馅料椰蓉、馅料黄油、馅料蛋液、馅料糖粉、馅料牛奶、蛋液、杏仁片.步骤.将中种原料混合在一起，静置 20 分钟；.将面团揉至光滑；.放温暖处发至约 3 倍大后撕成小块；.将主面团中除黄油以外的所有原料与撕碎的种面团混合在一起；.揉至面团比较光滑，能抻出厚膜的扩展状态.加入黄油；.揉至可以抻拉出比较结实的薄膜状态；.整理好面团，覆盖保鲜膜，放在温暖的地方静置 30 分钟；.将黄油切成小块软化；.加入糖粉搅拌均匀.分 3 次加入蛋液，搅拌均匀；.加入牛奶继续搅拌；.加入椰蓉；.搅拌均匀后，椰蓉馅就做好了；.将静置完成的按压排气，然后分割 4 等份，滚圆后覆盖保鲜膜松弛 20 分钟；.将松弛好的面团擀成约 5mm 厚的长方形；.将椰蓉馅均匀铺在上面；.卷起收口；.将其压扁；.用刀切割 3 份，起始位置不要切断；.编成辫子花样；.依次做好 4 个团，摆放在烤盘内；.送入烤箱，加一盆热水，进行最后发酵；.当面团发酵 1.5 倍大时，发酵结束；.在表面刷适量蛋液，撒上杏仁片；.送入烤箱，180 度，25 分钟；.取出后脱模放在晾网上晾凉后即可食用。.小贴士.1、环境温度、烤箱温度、面粉吸水性都是不同的，要根据实际控制加减；.2、椰蓉馅的量，正好是这一盘的用量；.3、面包上色后，要及时加盖锡纸 ;.4、本案选用的是阳晨 20CM 活底深方盘（中国红系列）。.\n',
  },
  {
    id: 10194,
    title: '湖南一笨贼入室盗窃惊动户主 慌乱逃跑时身份证落下被抓获',
    source: 'ZAKER潇湘',
    categories: '首页',
    createTime: '2018-4-26 08:17',
    content: '湖南一笨贼入室盗窃惊动户主 慌乱逃跑时身份证落下被抓获\n.湖南一名男子入室盗窃作案惊动了户主 , 慌忙逃跑时落下身份证成为罪证。4 月 22 日 , 这名涉嫌盗窃的男子在怀化火车站被民警抓获。.经审查 , 嫌疑男子柳某 ,40 岁 , 湖南吉首人。柳某小学毕业后一直在家务农 , 后来和同乡到湖北随州打工。因柳某嫌弃赚的钱少 , 在利益的驱使下 , 柳某因两次参与盗窃被判刑。2016 年出狱后，柳某身上没有钱 , 自己又没有什么技艺 , 便又干起了老本行。.2017 年 9 月的一天 , 柳某通过 " 采点 "，发现离打工不远处的高档小区 , 一家住户经常不在家。于是柳某在一天晚上 , 窜入这家住户 , 为了 " 行动 " 方便 , 柳某将身上的外套、鞋子脱在住户的院子里 , 从窗户爬了进去 , 通过一番 " 搜索 "，在客厅里偷了 5000 余元。哪知当天住户在家，发现客厅有异样 , 赶紧起床查看。柳某见住户醒来迅速逃跑 , 慌乱之中竟将自己的外套遗留在院子里。.户主发现家中被盗，立即向公安机关报案。警方侦查时，在院子里发现一件遗留的外套 , 里面发现了一张身份证 , 警方通过调查，将身份证持有人柳某锁定为嫌疑对象，上网进行通缉。柳某逃跑后，一直躲在怀化亲戚家。4 月 22 日 , 柳某欲从怀化火车站回麻阳老家时 , 被查验身份的铁路民警发现疑点，当场将其抓获，柳某对犯罪事实供认不讳。目前 , 嫌疑人柳某已被移交湖北警方。.潇湘晨报记者 宋凯欣 通讯员 余少生 尹志翔.\n',
  },
  {
    id: 10195,
    title: '奶酪包',
    source: '好豆网',
    categories: '首页',
    createTime: '2018-4-26 08:17',
    content: '奶酪包\n.乳酪包一度风靡整个烘焙圈，心里一直在长草，看见英子姐做的那么诱人，这次终于拔草了。 满满的奶酪裹着松软的面包，让人垂涎欲滴。细细咀嚼后满口留香，浓郁的奶香让人回味无穷。 奶酪包并不难，和普通甜面包的做法是一样的，所不同的就是成品后的面包里外里都涂上厚厚的调制后的奶酪，味道酸甜可口，多吃也不腻，奶香浓郁酸甜适口是它的的特点，加上面包的暄软每一口都是美滋美味的享受。 面包材料：面包粉 245 克、细沙糖 25 克、干酵母 2 克、盐 1.4 克、黄油 25 克、全蛋液 42 克、牛奶 123 克 馅料：奶油奶酪 147 克、细沙糖 35 克、牛奶 32 克、奶粉 12 克 外层奶粉：适量 模具： 8 寸圆摸.简介.乳酪包一度风靡整个烘焙圈，心里一直在长草，看见英子姐做的那么诱人，这次终于拔草了。 满满的奶酪裹着松软的面包，让人垂涎欲滴。细细咀嚼后满口留香，浓郁的奶香让人回味无穷。 奶酪包并不难，和普通甜面包的做法是一样的，所不同的就是成品后的面包里外里都涂上厚厚的调制后的奶酪，味道酸甜可口，多吃也不腻，奶香浓郁酸甜适口是它的的特点，加上面包的暄软每一口都是美滋美味的享受。 面包材料：面包粉 245 克、细沙糖 25 克、干酵母 2 克、盐 1.4 克、黄油 25 克、全蛋液 42 克、牛奶 123 克 馅料：奶油奶酪 147 克、细沙糖 35 克、牛奶 32 克、奶粉 12 克 外层奶粉：适量 模具： 8 寸圆摸.食材.高筋粉、细砂糖、干酵母、盐、黄油、全蛋液、牛奶、奶油奶酪、细砂糖、牛奶、奶粉、外层奶粉.步骤.将 245 克面粉，25 克细砂糖，1.4 克盐，2 克酵母放入搅拌桶中，放入 42 克鸡蛋，加入 123 克牛奶；.用厨师机将面团揉至光滑，放入 25 克黄油后继续揉制；.将面团揉到扩展阶段；.把面团整理成型放入容器于温暖处发酵；.将面团发酵至 2 倍大；.排汽滚圆松弛 15 分钟；.将松弛后的面团压扁、排气，放到 8 寸模具中；.做好后送入烤箱里发酵。烤箱里放碗热水，把面包放入进行最后发酵，直到面团变为 2.5 倍大小；.烤箱预热 170 ℃，中下层，上下火，23 分钟左右烤至上色均匀；烤好的面包从模具中取出，放在烤网上晾凉；.在烤面包的时间制作乳酪酱。把 147 克奶油奶酪切成小块隔水加热软化；.加入 35 克糖粉，用刮刀搅拌，至成乳膏状；.分次少量的加入 32 克鲜奶，每次用电动打蛋器打匀；.再加入 12 克奶粉搅拌均匀乳酪酱就做好了；.用面包刀将冷却的面包切成 6 份；.每份面包，用刀在中间划 2 道口子；.把奶酪馅抹在切口里；.然后在两个切面也涂抹薄薄一层奶酪馅；.最后，把涂抹了奶酪馅的切面放在奶粉（配方分量外）里压一下，使两个切面都粘上厚厚一层奶粉，奶酪面包就做好了。外层筛上奶粉更好吃哦 !.小贴士.1、面包粉的吸水率略有差别，也会因季节不同而变化，所以要预留 10 克左右的液体做最后的调整；.2、请根据自己的烤箱调整时间温度，火力猛的接近尾声要加盖锡纸以免上色过深；.3、切口尽量深些，奶酪酱多填些吃起来更过瘾啊，而且这个乳酪包热吃凉吃都不错哦！.\n',
  },
]
const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data
  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

const NOTFOUND = {
  message: 'Not Found',
  documentation_url: 'http://localhost:8000/request',
}

module.exports = {

  [`GET ${apiPrefix}/authenticateList`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1
    let newData = database1
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'createTime') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()

              if (start && end) {
                return now >= start && now <= end
              }
              return true
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },

  [`DELETE ${apiPrefix}/authenticateList`] (req, res) {
    const { ids } = req.body
    database1 = database1.filter(item => !ids.some(_ => _ === item.id))
    res.status(204).end()
  },


  [`POST ${apiPrefix}/authenticate`] (req, res) {
    const newData = req.body
    newData.createTime = Mock.mock('@now')
    newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', newData.nickName.substr(0, 1))
    newData.id = Mock.mock('@id')

    database1.unshift(newData)

    res.status(200).end()
  },

  [`GET ${apiPrefix}/authenticate/:id`] (req, res) {
    const { id } = req.params
    const idInt = parseInt(id, 0)
    const data = queryArray(database1, idInt, 'id')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`DELETE ${apiPrefix}/authenticate/:id`] (req, res) {
    const { id } = req.params
    const data = queryArray(database1, id, 'id')
    if (data) {
      database1 = database1.filter(item => item.id !== id)
      res.status(204).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },

  [`PATCH ${apiPrefix}/authenticate/:id`] (req, res) {
    const { id } = req.params
    const editItem = req.body
    let isExist = false

    database1 = database1.map((item) => {
      if (item.id === id) {
        isExist = true
        return Object.assign({}, item, editItem)
      }
      return item
    })

    if (isExist) {
      res.status(201).end()
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
}
