const ITEMS = [
  {
    id: "luu-but",
    nameVi: "Sổ Lưu Bút & Thần Tượng (2010 – 2016)",
    nameEn: "Student Yearbook & Idol Scrapbook (2010 – 2016)",
    shortVi: "Lưu giữ chữ ký, dòng tâm sự viết tay và ảnh thần tượng tuổi học trò.",
    shortEn: "Preserving signatures, handwritten notes, and teenage pop-idol cutouts.",
    storyVi: "Những trang lưu bút chuyền tay qua từng dãy bàn, mực tím đôi khi nhòe ở chỗ một lời hẹn. Xen giữa chữ ký bạn bè là ảnh thần tượng được cắt từ tạp chí — một cuốn sổ nhỏ giữ nguyên giọng nói của tuổi học trò những năm 2010–2016.",
    storyEn: "Yearbooks travelled from desk to desk, their purple ink sometimes blurred where a promise was written. Between classmates’ signatures sat pop-idol clippings from magazines: a small book still speaking in the voice of students from 2010 to 2016.",
    stemVi: "Giấy xenlulozơ ngả vàng khi lignin còn sót lại bị oxy hóa và phân hủy dưới tác động của ánh sáng, nhiệt và không khí. Bản ghi URI trong cấu trúc NDEF cho phép thẻ NFC dẫn đến bản lưu trữ số của cuốn sổ.",
    stemEn: "Residual lignin oxidizes and breaks down under light, heat, and air, gradually yellowing cellulose paper. An NDEF URI record lets an NFC tag link directly to the scrapbook’s digital archive.",
    art: `<rect x="83" y="58" width="172" height="215" rx="8" fill="#d9c7a6" stroke="#7a1c1c" stroke-width="3"/><rect x="95" y="48" width="172" height="215" rx="8" fill="#fcf9f2" stroke="#7a1c1c" stroke-width="3"/><path d="M118 91h112M118 111h112M118 131h82M118 167c17-17 30 17 47 0s30 17 48 0M118 190h105M118 211h78" fill="none" stroke="#987d54" stroke-width="2"/><path d="m225 77 19 18-34 34-19 4 4-19z" fill="#ead5a9" stroke="#c59b27" stroke-width="2"/><path d="m211 129 34-34 9 9-34 34-13 3z" fill="#7a1c1c"/><circle cx="92" cy="96" r="3" fill="#c59b27"/><circle cx="92" cy="131" r="3" fill="#c59b27"/><circle cx="92" cy="166" r="3" fill="#c59b27"/><path d="M82 283h179" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "casio",
    nameVi: "Máy Tính Điện Tử Casio Huyền Thoại",
    nameEn: "Vintage Solar & Battery Scientific Calculator",
    shortVi: "Người bạn đồng hành qua hàng trăm kỳ kiểm tra Toán, Lý, Hóa.",
    shortEn: "A faithful companion through hundreds of high school Math, Physics, and Chemistry exams.",
    storyVi: "Chiếc máy tính đã nằm gọn trong ngăn bàn, cùng chủ nhân vượt qua những bài kiểm tra và phép tính vội cuối giờ. Vết xước trên vỏ nhựa không làm mờ màn hình nhỏ từng hiện ra những đáp số đáng nhớ.",
    storyEn: "This calculator fit neatly inside a desk drawer and went along to tests, late calculations, and the final minutes of class. Its scuffed case never dimmed the small screen that once showed so many memorable answers.",
    stemVi: "Pin mặt trời biến đổi photon thành điện năng nhờ hiệu ứng quang điện trong ở tiếp giáp bán dẫn. LCD điều khiển ánh sáng phân cực đi qua các lớp tinh thể lỏng để tạo nét số, tiêu thụ rất ít năng lượng.",
    stemEn: "A photovoltaic junction converts photons into electrical energy through the internal photoelectric effect. The LCD controls polarized light through liquid-crystal layers to form digits while using very little power.",
    art: `<rect x="106" y="38" width="128" height="250" rx="17" fill="#d8d0bd" stroke="#1e1b18" stroke-width="3"/><rect x="122" y="55" width="96" height="53" rx="4" fill="#d4d7bd" stroke="#2a5c38" stroke-width="2"/><path d="M129 69h82" stroke="#78906c" stroke-width="2"/><text x="202" y="96" text-anchor="end" fill="#2a5c38" font-family="monospace" font-size="24">13.56</text><rect x="122" y="124" width="96" height="28" fill="#34332c"/><path d="M127 129h17v18h-17zm20 0h17v18h-17zm20 0h17v18h-17zm20 0h17v18h-17z" fill="#c59b27"/><g fill="#f3eddf" stroke="#7a1c1c" stroke-width="1.5"><rect x="124" y="165" width="25" height="22" rx="4"/><rect x="157" y="165" width="25" height="22" rx="4"/><rect x="190" y="165" width="25" height="22" rx="4"/><rect x="124" y="196" width="25" height="22" rx="4"/><rect x="157" y="196" width="25" height="22" rx="4"/><rect x="190" y="196" width="25" height="22" rx="4"/><rect x="124" y="227" width="25" height="22" rx="4"/><rect x="157" y="227" width="25" height="22" rx="4"/><rect x="190" y="227" width="25" height="22" rx="4"/></g><path d="M127 78h34v18h-34z" fill="#b9c597" stroke="#2a5c38"/><path d="M82 288h178" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "dien-thoai",
    nameVi: "Điện Thoại Phím Bấm & Tai Nghe Dây Trắng",
    nameEn: "Retro Push-Button Feature Phone & Wired Earphones",
    shortVi: "Kỷ vật của những tin nhắn SMS giấu sau hàng rào sách và bản nhạc MP3 giờ ra chơi.",
    shortEn: "Relic of secret SMS texts behind textbook barricades and recess MP3 tracks.",
    storyVi: "Một tin nhắn ngắn được gõ bằng phím cứng, một bản nhạc nghe lén qua tai nghe dây trắng — đó là những khoảng riêng tư giữa tiết học. Chiếc điện thoại cũ gợi lại nhịp chờ hồi âm chậm rãi hơn hôm nay.",
    storyEn: "A short text typed on tactile keys, a song shared through white wired earphones: small private moments between lessons. The old phone recalls the slower, more patient wait for a reply.",
    stemVi: "Dòng điện âm tần chạy qua cuộn dây tạo từ trường biến thiên, tương tác với nam châm vĩnh cửu làm màng loa rung. Dao động của màng loa nén và giãn không khí, biến tín hiệu điện thành sóng âm truyền đến tai.",
    stemEn: "Audio-frequency current in the voice coil creates a changing magnetic field that interacts with a permanent magnet and moves the speaker diaphragm. The diaphragm compresses and rarefies air, turning an electrical signal into sound waves.",
    art: `<rect x="97" y="37" width="114" height="247" rx="20" fill="#ded7c9" stroke="#1e1b18" stroke-width="3"/><rect x="111" y="59" width="86" height="61" rx="5" fill="#bac4a5" stroke="#2a5c38" stroke-width="2"/><path d="M126 75h55m-55 12h42m-42 12h48" stroke="#657759" stroke-width="2"/><circle cx="154" cy="136" r="6" fill="#7a1c1c"/><g fill="#f8f3e7" stroke="#8c7c60"><rect x="115" y="153" width="23" height="18" rx="8"/><rect x="143" y="153" width="23" height="18" rx="8"/><rect x="171" y="153" width="23" height="18" rx="8"/><rect x="115" y="178" width="23" height="18" rx="8"/><rect x="143" y="178" width="23" height="18" rx="8"/><rect x="171" y="178" width="23" height="18" rx="8"/><rect x="115" y="203" width="23" height="18" rx="8"/><rect x="143" y="203" width="23" height="18" rx="8"/><rect x="171" y="203" width="23" height="18" rx="8"/></g><path d="M206 82c41 18 2 43 33 65 34 24-19 54 18 84" fill="none" stroke="#f7f5eb" stroke-width="5"/><path d="M257 230v17a8 8 0 0 1-16 0v-12m16-5v17a8 8 0 0 0 16 0v-12" fill="none" stroke="#7a1c1c" stroke-width="3"/><path d="M79 288h194" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "sach-giao-khoa",
    nameVi: "Sách Giáo Khoa Cũ & Tạp Chí Tuổi Học Trò",
    nameEn: "Worn-Out Textbooks & Classic Teen Magazines",
    shortVi: "Những trang sách sờn góc gắn liền với 60 mùa truyền lửa dưới mái trường Hoàng Văn Thụ.",
    shortEn: "Dog-eared pages tied to 60 seasons of knowledge at Hoang Van Thu High School.",
    storyVi: "Gáy sách mềm đi sau nhiều lần mở, góc trang được gấp lại để đánh dấu một bài học. Tạp chí chuyền tay lúc tan trường nằm cạnh sách giáo khoa — những vật bình dị lưu dấu từng lớp học qua nhiều thế hệ.",
    storyEn: "Book spines softened after countless readings; a folded page corner marked the lesson to return to. Teen magazines passed around after class beside the textbooks, ordinary objects that remember generations of students.",
    stemVi: "Ma sát tĩnh giữa các mặt bìa tạo lực giữ chồng sách không trượt khi độ nghiêng còn nhỏ. Trong in báo, quy trình CMYK tách hình ảnh thành bốn bản màu cyan, magenta, yellow và black để chồng in thành hình hoàn chỉnh.",
    stemEn: "Static friction between covers holds a stack in place until the incline exceeds its slip threshold. Newspaper printing separates images into cyan, magenta, yellow, and black plates, which are overprinted to form the final image.",
    art: `<path d="M69 114 206 74l50 18-137 42z" fill="#8f4e3d" stroke="#1e1b18" stroke-width="2"/><path d="m69 114 137-40v151L69 263z" fill="#d5bd8f" stroke="#7a1c1c" stroke-width="3"/><path d="m84 124 113-33v124L84 249z" fill="#fcf9f2"/><path d="m100 139 83-24m-83 40 83-24m-83 41 83-24m-83 41 83-24m-83 40 51-15" stroke="#9e8d70" stroke-width="2"/><path d="m153 116 97-28v137l-97 28z" fill="#c9d0ad" stroke="#2a5c38" stroke-width="2"/><path d="m169 135 65-19v16l-65 19zm0 28 65-19v39l-65 19z" fill="#fcf9f2" stroke="#ad9d79"/><circle cx="201" cy="163" r="12" fill="#c59b27" opacity=".8"/><path d="M71 275h188" stroke="#7a1c1c" stroke-width="2"/>`
  },
  {
    id: "lo-sao",
    nameVi: "Lọ Thủy Tinh Sao Giấy & Hạc Giấy Dạ Quang",
    nameEn: "Glass Jar of Luminous Origami Stars & Paper Cranes",
    shortVi: "Hàng trăm điều ước tuổi mười bảy được gấp tỉ mỉ gửi tặng bạn cùng bàn.",
    shortEn: "Hundreds of seventeenth-year wishes meticulously folded for deskmates.",
    storyVi: "Mỗi ngôi sao giấy là một mảnh giấy nhỏ cuộn rồi gấp thành hình, mỗi cánh hạc mang theo một điều ước. Gom lại trong chiếc lọ trong, chúng biến một món quà giản dị thành lời nhắn gửi giữa bạn bè.",
    storyEn: "Each paper star began as a narrow strip folded into shape; each crane carried a wish. Gathered in a clear jar, they turned a modest handmade gift into a message between friends.",
    stemVi: "Nếp gấp origami phân chia mặt phẳng thành các đa giác, tạo cấu trúc không gian từ một tấm giấy mỏng. Bột lân quang hấp thụ photon rồi giải phóng năng lượng dần dưới dạng ánh sáng, nên vật liệu tiếp tục phát sáng sau khi tắt nguồn chiếu.",
    stemEn: "Origami creases divide a flat sheet into polygons and create a three-dimensional structure. Phosphorescent powder absorbs photons and releases that energy gradually as light, so it continues to glow after illumination stops.",
    art: `<path d="M101 101h117l-12 165a16 16 0 0 1-16 15h-61a16 16 0 0 1-16-15z" fill="#dce0cf" fill-opacity=".72" stroke="#2a5c38" stroke-width="3"/><path d="M96 98h127v17H96z" fill="#b9a784" stroke="#7a1c1c" stroke-width="2"/><path d="M105 126h109" stroke="#fcf9f2" stroke-width="5" opacity=".8"/><g fill="#c59b27" stroke="#9a7314" stroke-width="1"><path d="m135 151 5 10 11 2-8 7 2 11-10-5-10 5 2-11-8-7 11-2z"/><path d="m180 178 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z"/><path d="m147 218 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z"/></g><path d="m185 138 17-11 7 15-12 11 7 10-17-1-8-12zm-62 68 13-9 10 11-9 12-10-4-7 7-5-13z" fill="#f1e4bb" stroke="#7a1c1c" stroke-width="1.5"/><path d="M88 287h147" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "cap-long",
    nameVi: "Túi Cước Kẻ Sọc & Cặp Lồng Nhôm Xưa",
    nameEn: "Vintage Striped Woven Bag & Aluminum Tiffin Carrier",
    shortVi: "Ký ức những buổi chợ quê và bữa cơm ấm nóng mang theo đến lớp.",
    shortEn: "Memories of rural markets and warm homemade meals brought to school.",
    storyVi: "Chiếc túi cước nhẹ từng theo người đi chợ, chiếc cặp lồng giữ bữa cơm nhà cho giờ nghỉ trưa. Mùi cơm nóng và tiếng quai xách khẽ va nhau là một phần thân thuộc của ngày đến lớp.",
    storyEn: "A light woven bag once went along to market; an aluminum tiffin carried a meal from home for the lunch break. Warm rice and the quiet clink of its handle belong to the familiar rhythm of a school day.",
    stemVi: "Bề mặt nhôm tự hình thành lớp oxit Al₂O₃ mỏng, bám chắc và thụ động hóa kim loại trước ăn mòn. Các dải polymer PE đan chéo phân bố lực kéo qua nhiều sợi, giúp thân túi chịu tải tốt hơn một dải đơn.",
    stemEn: "Aluminum naturally forms a thin, adherent Al₂O₃ oxide film that passivates the metal against corrosion. Cross-woven polyethylene (PE) strips distribute tensile loads across many fibers, making the bag stronger than a single strip.",
    art: `<path d="M71 115h122l22 153H91z" fill="#d6b87f" stroke="#7a1c1c" stroke-width="3"/><path d="m83 123 22 137m10-137 22 137m10-137 22 137m10-137 22 137M74 155l126-5m-122 32 131-5m-126 32 130-5m-125 32 135-5" stroke="#2a5c38" stroke-width="5" opacity=".85"/><path d="M111 115c5-58 52-58 58 0" fill="none" stroke="#7a1c1c" stroke-width="4"/><path d="M201 132h43v99h-43z" fill="#b6b6a6" stroke="#5b5146" stroke-width="2"/><path d="M198 145h49m-46 13h43m-43 50h43m-49 14h49" stroke="#f3eddf" stroke-width="4"/><path d="M196 128h54v10h-54zm6-9h42v8h-42z" fill="#8e8d7e" stroke="#5b5146" stroke-width="1.5"/><path d="M193 158h-8v39h8" fill="none" stroke="#c59b27" stroke-width="3"/><path d="M68 282h190" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "coi-da",
    nameVi: "Cối Đá Xay Bột & Cân Đồng Quả Quả",
    nameEn: "Traditional Stone Mill & Vintage Brass Balance Scale",
    shortVi: "Dấu ấn lao động thủ công mộc mạc của những thập niên đầu lập trường.",
    shortEn: "Rustic tools of manual labor from the school's founding decades.",
    storyVi: "Cối đá quay chậm, hạt ngũ cốc vỡ ra dưới sức nặng và đôi tay bền bỉ. Bên cạnh đó, chiếc cân đồng với quả cân rời nhắc về cách người xưa đong đếm bằng thăng bằng, kinh nghiệm và sự chính xác.",
    storyEn: "The stone mill turned slowly as grain cracked beneath its weight and the steady work of hands. Beside it, a brass balance scale with its separate weights recalls an older measure of accuracy: equilibrium, practice, and care.",
    stemVi: "Trên cân đòn, vật cân bằng khi tổng mô-men lực quanh điểm tựa triệt tiêu; với một lực đơn, mô-men τ = F × d phụ thuộc lực và cánh tay đòn. Bề mặt đá nhám tạo ma sát trượt giúp nghiền hạt khi hai thớt đá chuyển động tương đối.",
    stemEn: "A balance beam is level when net torque about its pivot is zero; for a single force, torque τ = F × d depends on force and lever arm. Rough stone surfaces provide sliding friction that grinds grain as the millstones move against each other.",
    art: `<ellipse cx="145" cy="226" rx="83" ry="33" fill="#aaa493" stroke="#1e1b18" stroke-width="3"/><path d="M62 226v22c0 18 37 33 83 33s83-15 83-33v-22" fill="#8f8c7d" stroke="#1e1b18" stroke-width="3"/><ellipse cx="145" cy="220" rx="63" ry="22" fill="#c6c1b2" stroke="#5b5146" stroke-width="2"/><circle cx="145" cy="199" r="11" fill="#6f6b60" stroke="#1e1b18" stroke-width="2"/><path d="M222 76v121m-55-82h110m-55 0 43 59m-43-59-43 59" fill="none" stroke="#9b7619" stroke-width="5"/><path d="M167 112c-16 32-16 50 0 50s16-18 0-50zm110 0c-16 32-16 50 0 50s16-18 0-50z" fill="#c59b27" stroke="#7a1c1c" stroke-width="2"/><path d="M197 194h51" stroke="#1e1b18" stroke-width="7" stroke-linecap="round"/><path d="M67 286h190" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "banh-day",
    nameVi: "Bánh Dày Truyền Thống Lục Yên",
    nameEn: "Traditional Luc Yen Sticky Rice Cake",
    shortVi: "Đặc sản nếp nương dẻo thơm kết tinh tình đất và người quê hương.",
    shortEn: "Fragrant highland glutinous rice delicacy embodying local heritage.",
    storyVi: "Từ nếp nương thơm, gạo được đồ chín rồi giã nhuyễn thành bánh dày trắng, mềm và dẻo. Món quà mộc mạc của Lục Yên gói trong đó hương mùa mới và sự chăm chút của người làm bánh.",
    storyEn: "Fragrant upland sticky rice is steamed, then pounded until it becomes a smooth, soft white cake. This modest specialty of Luc Yen carries the scent of a new harvest and the care of the hands that made it.",
    stemVi: "Gạo nếp chứa khoảng 95–98% amylopectin trong phần tinh bột. Khi hồ hóa, các mạch nhánh trương nở và tạo mạng gel dẻo; quá trình giã cơ học làm khối tinh bột liên kết chặt, cho cấu trúc đàn hồi đặc trưng của bánh.",
    stemEn: "Glutinous rice starch is about 95–98% amylopectin. During gelatinization, its branched molecules swell into a cohesive gel; mechanical pounding strengthens the starch network and gives the cake its characteristic elasticity.",
    art: `<path d="M78 207c0-23 30-42 67-42s67 19 67 42v35c0 24-30 43-67 43s-67-19-67-43z" fill="#e1d7bb" stroke="#7a1c1c" stroke-width="3"/><ellipse cx="145" cy="206" rx="67" ry="40" fill="#fffdf5" stroke="#8e8067" stroke-width="2"/><ellipse cx="145" cy="207" rx="46" ry="24" fill="#f3eddf" stroke="#d7c8a9" stroke-width="1.5"/><path d="M103 122c18-23 32-33 42-35m-15 36c13-28 25-41 39-48m-19 52c11-22 21-33 34-39" fill="none" stroke="#c59b27" stroke-width="4" stroke-linecap="round"/><path d="m224 112 17-18m-10 29 22-10" stroke="#2a5c38" stroke-width="3" stroke-linecap="round"/><circle cx="103" cy="222" r="4" fill="#e2d3b6"/><circle cx="187" cy="198" r="4" fill="#e2d3b6"/><path d="M68 290h190" stroke="#2a5c38" stroke-width="2"/>`
  }
];

const COPY = {
  vi: {
    skip: "Bỏ qua và đến nội dung",
    collectionNav: "Bộ sưu tập",
    stemNav: "Bản vẽ STEM",
    print: "In thẻ NFC",
    eyebrow: "Triển lãm STEM · THPT Hoàng Văn Thụ",
    titleVi: "Thẻ tên NFC thông minh — Số hóa ký ức 60 năm",
    titleEn: "Smart NFC Nametag — A 60-Year Digital Memory Archive",
    intro: "Tám kỷ vật, tám câu chuyện từ những năm tháng học trò đến ngày đầu lập trường. Chạm thẻ NFC để nghe ký ức và tìm hiểu khoa học ẩn sau mỗi vật thân quen.",
    browse: "Xem bộ sưu tập",
    anniversary: "Năm truyền lửa",
    nfcLine: "CHẠM KỶ VẬT · MỞ KÝ ỨC",
    collectionEyebrow: "Bộ sưu tập kỷ vật · 08 hiện vật",
    collectionTitleVi: "Những vật nhỏ, chuyện dài",
    collectionTitleEn: "Small Things, Long Stories",
    collectionNote: "Chọn một kỷ vật để mở câu chuyện, nghe thuyết minh và xem phân tích STEM.",
    detailDivider: "Chạm để ghi nhớ",
    nfcTap: "CHẠM THẺ",
    skipIntro: "Bỏ qua",
    memoryLabel: "Ký ức được lưu giữ",
    storyLabel: "Câu chuyện · Story",
    stemLabel: "Góc nhìn STEM · STEM lens",
    listen: "Nghe thuyết minh",
    copyUrl: "Sao chép URL NFC",
    anatomyEyebrow: "Cấu tạo thẻ · 03 lớp",
    anatomyTitleVi: "Một chạm, ba lớp kỹ thuật",
    anatomyTitleEn: "One Tap, Three Engineered Layers",
    explode: "Tách lớp 3D",
    layerLabel: "Bảng tên song ngữ",
    layerShield: "Lớp đệm chống nhiễu kim loại",
    layerChip: "Chip NFC thụ động 13.56 MHz",
    calloutTop: "Nhãn song ngữ",
    calloutMiddle: "Lớp ferrite chống nhiễu",
    calloutBottom: "Cuộn dây + vi mạch NFC",
    anatomyNoteVi: "Thẻ giao tiếp không tiếp xúc",
    anatomyNoteEn: "Contactless NFC Tag",
    anatomyText: "Điện thoại tạo trường điện từ tần số cao. Cuộn dây trong thẻ thu năng lượng để cấp nguồn cho vi mạch và trao đổi dữ liệu ở cự ly gần.",
    blueprintEyebrow: "Bản vẽ kỹ thuật · 04 trụ cột",
    blueprintTitleVi: "STEM nằm trong từng chi tiết",
    blueprintTitleEn: "STEM in Every Detail",
    blueprintNote: "Từ cảm ứng điện từ đến khung dữ liệu NDEF — một dự án liên ngành, có thể kiểm chứng.",
    printEyebrow: "Bản in A4 · Thuần NFC, không QR",
    printPromptVi: "In bảng tên song ngữ cho bàn trưng bày",
    printPromptEn: "Print Bilingual NFC Nametags",
    footerVi: "Dự án STEM · Trường THPT Hoàng Văn Thụ",
    footerEn: "A school archive made tangible through science.",
    speechUnavailable: "Trình duyệt này không hỗ trợ tổng hợp giọng nói.",
    speechError: "Không thể phát thuyết minh. Hãy thử lại hoặc kiểm tra cài đặt giọng nói.",
    speechDone: "Đã đọc xong câu chuyện.",
    copied: "Đã sao chép địa chỉ NFC.",
    copyError: "Không thể sao chép URL. Hãy kiểm tra quyền truy cập clipboard của trình duyệt.",
    explodeOn: "Đã tách ba lớp của thẻ.",
    explodeOff: "Đã ghép các lớp của thẻ.",
    layerInstruction: "Chạm hoặc nhấn Enter để tách lớp thẻ NFC",
    stem: [
      { vi: "Khoa học", en: "Science", descriptionVi: "Định luật cảm ứng điện từ Faraday ở tần số 13.56 MHz tạo dòng điện cảm ứng nuôi chip thụ động, không cần pin.", descriptionEn: "Faraday induction at 13.56 MHz powers the passive chip without a battery." },
      { vi: "Công nghệ", en: "Technology", descriptionVi: "Truyền dữ liệu trường gần NFC và tổng hợp giọng nói song ngữ ngay trên trình duyệt.", descriptionEn: "NFC near-field data transfer and bilingual speech synthesis in the browser." },
      { vi: "Kỹ thuật", en: "Engineering", descriptionVi: "Kết cấu thẻ 3 lớp dùng lớp đệm ferrite giảm suy hao do dòng điện xoáy trên bề mặt kim loại.", descriptionEn: "A three-layer tag uses ferrite shielding to reduce eddy-current losses near metal." },
      { vi: "Toán học", en: "Mathematics", descriptionVi: "Cộng hưởng mạch LC: f = 1/(2π√LC) = 13.56 MHz; dữ liệu được đóng gói thành bản ghi NDEF.", descriptionEn: "LC resonance: f = 1/(2π√LC) = 13.56 MHz; data is framed in NDEF records." }
    ]
  },
  en: {
    skip: "Skip to content",
    collectionNav: "Collection",
    stemNav: "STEM blueprint",
    print: "Print NFC tags",
    eyebrow: "STEM exhibition · Hoang Van Thu High School",
    titleVi: "Thẻ tên NFC thông minh — Số hóa ký ức 60 năm",
    titleEn: "Smart NFC Nametag — A 60-Year Digital Memory Archive",
    intro: "Eight objects, eight stories stretching from student days to the school’s founding. Tap an NFC tag to hear a memory and discover the science inside an everyday keepsake.",
    browse: "Browse the collection",
    anniversary: "Years of learning",
    nfcLine: "TAP A KEEPSAKE · OPEN A MEMORY",
    collectionEyebrow: "Keepsake collection · 08 objects",
    collectionTitleVi: "Những vật nhỏ, chuyện dài",
    collectionTitleEn: "Small Things, Long Stories",
    collectionNote: "Choose an object to open its story, hear the guide, and explore its STEM connections.",
    detailDivider: "Tap to remember",
    nfcTap: "TAP TO OPEN",
    skipIntro: "Skip",
    memoryLabel: "A memory preserved",
    storyLabel: "Câu chuyện · Story",
    stemLabel: "Góc nhìn STEM · STEM lens",
    listen: "Listen to the guide",
    copyUrl: "Copy NFC URL",
    anatomyEyebrow: "Tag anatomy · 03 layers",
    anatomyTitleVi: "Một chạm, ba lớp kỹ thuật",
    anatomyTitleEn: "One Tap, Three Engineered Layers",
    explode: "Explode 3D layers",
    layerLabel: "Bilingual label",
    layerShield: "Anti-metal magnetic shield",
    layerChip: "13.56 MHz passive NFC chip",
    calloutTop: "Bilingual label",
    calloutMiddle: "Ferrite interference shield",
    calloutBottom: "NFC coil + microchip",
    anatomyNoteVi: "Thẻ giao tiếp không tiếp xúc",
    anatomyNoteEn: "Contactless NFC Tag",
    anatomyText: "A phone generates a high-frequency electromagnetic field. The tag’s coil harvests that energy to power its microchip and exchange data at close range.",
    blueprintEyebrow: "Technical blueprint · 04 pillars",
    blueprintTitleVi: "STEM nằm trong từng chi tiết",
    blueprintTitleEn: "STEM in Every Detail",
    blueprintNote: "From electromagnetic induction to NDEF data framing: an interdisciplinary, testable project.",
    printEyebrow: "A4 print sheet · NFC only, no QR codes",
    printPromptVi: "In bảng tên song ngữ cho bàn trưng bày",
    printPromptEn: "Print Bilingual NFC Nametags",
    footerVi: "Dự án STEM · Trường THPT Hoàng Văn Thụ",
    footerEn: "A school archive made tangible through science.",
    speechUnavailable: "Speech synthesis is not supported in this browser.",
    speechError: "The guide could not be played. Try again or check your speech settings.",
    speechDone: "The story has finished.",
    copied: "NFC address copied.",
    copyError: "Could not copy the URL. Check your browser’s clipboard permission.",
    explodeOn: "The three tag layers are separated.",
    explodeOff: "The tag layers are stacked together.",
    layerInstruction: "Tap or press Enter to separate the NFC tag layers",
    stem: [
      { vi: "Khoa học", en: "Science", descriptionVi: "Định luật cảm ứng điện từ Faraday ở tần số 13.56 MHz tạo dòng điện cảm ứng nuôi chip thụ động, không cần pin.", descriptionEn: "Faraday induction at 13.56 MHz powers the passive chip without a battery." },
      { vi: "Công nghệ", en: "Technology", descriptionVi: "Truyền dữ liệu trường gần NFC và tổng hợp giọng nói song ngữ ngay trên trình duyệt.", descriptionEn: "NFC near-field data transfer and bilingual speech synthesis in the browser." },
      { vi: "Kỹ thuật", en: "Engineering", descriptionVi: "Kết cấu thẻ 3 lớp dùng lớp đệm ferrite giảm suy hao do dòng điện xoáy trên bề mặt kim loại.", descriptionEn: "A three-layer tag uses ferrite shielding to reduce eddy-current losses near metal." },
      { vi: "Toán học", en: "Mathematics", descriptionVi: "Cộng hưởng mạch LC: f = 1/(2π√LC) = 13.56 MHz; dữ liệu được đóng gói thành bản ghi NDEF.", descriptionEn: "LC resonance: f = 1/(2π√LC) = 13.56 MHz; data is framed in NDEF records." }
    ]
  }
};

const STEM_ICONS = [
  `<path d="M12 3v3m0 12v3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12M3 12h3m12 0h3m-15.36 6.36 2.12-2.12m8.48-8.48 2.12-2.12"/><circle cx="12" cy="12" r="4"/>`,
  `<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h3m2 0h3m-8 4h3m2 0h3"/>`,
  `<path d="m4 17 8-13 8 13z"/><path d="M8 17v3h8v-3M12 4v13m-8 0h16"/>`,
  `<path d="M4 19 12 4l8 15H4Z"/><path d="M8 15h8M10 11h4m-5 5h6"/>`
];
const STEM_NAMES = [["S", "Science"], ["T", "Technology"], ["E", "Engineering"], ["M", "Mathematics"]];
const $ = (selector) => document.querySelector(selector);
let language = "vi";
let selectedItem = ITEMS[0];
let toastTimer;
let introTimer;

function currentCopy(key) {
  return COPY[language][key];
}

function setLanguage(nextLanguage) {
  if (!COPY[nextLanguage]) return;
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = currentCopy(element.dataset.copy);
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll(".language-switch__button").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderCollection();
  renderDetail();
  renderStem();
  renderPrintSheet();
  $("#tag-stage").setAttribute("aria-label", currentCopy("layerInstruction"));
}

function makeIllustration(item, className = "") {
  return `<svg class="${className}" viewBox="0 0 320 320" role="img" aria-label="${escapeAttribute(language === "vi" ? item.nameVi : item.nameEn)}" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="320" fill="#efe5d0"/><path d="M20 20h25M20 20v25M300 20h-25M300 20v25M20 300h25M20 300v-25M300 300h-25M300 300v-25" fill="none" stroke="#c59b27" stroke-width="1.5"/><path d="M35 42h250M35 278h250" stroke="#cdbd9f" stroke-width="1"/>${item.art}<circle cx="160" cy="303" r="2" fill="#c59b27"/></svg>`;
}

function escapeAttribute(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderCollection() {
  $("#artifact-grid").innerHTML = ITEMS.map((item, index) => `
    <button class="artifact-card${item.id === selectedItem.id ? " is-selected" : ""}" type="button" data-item-id="${item.id}" aria-pressed="${item.id === selectedItem.id}">
      <span class="artifact-card__art">${makeIllustration(item)}</span>
      <span class="artifact-card__meta"><span>${String(index + 1).padStart(2, "0")} / 08</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg></span>
      <span class="artifact-card__title"><span class="vi-title">${escapeAttribute(item.nameVi)}</span><span class="en-title">${escapeAttribute(item.nameEn)}</span></span>
    </button>`).join("");
  $("#artifact-grid").querySelectorAll("[data-item-id]").forEach((button) => {
    button.addEventListener("click", () => selectItem(button.dataset.itemId, true));
  });
}

function renderDetail() {
  const index = ITEMS.findIndex((item) => item.id === selectedItem.id);
  $("#detail-art").innerHTML = makeIllustration(selectedItem);
  $("#detail-title").innerHTML = `<span class="vi-title">${escapeAttribute(selectedItem.nameVi)}</span><span class="en-title">${escapeAttribute(selectedItem.nameEn)}</span>`;
  $("#detail-short").textContent = selectedItem[language === "vi" ? "shortVi" : "shortEn"];
  $("#detail-story").textContent = selectedItem[language === "vi" ? "storyVi" : "storyEn"];
  $("#detail-stem").textContent = selectedItem[language === "vi" ? "stemVi" : "stemEn"];
  $("#item-number").textContent = `${String(index + 1).padStart(2, "0")} / 08`;
  updateSpeechText();
}

function updateSpeechText() {
  const title = selectedItem[language === "vi" ? "nameVi" : "nameEn"];
  const story = selectedItem[language === "vi" ? "storyVi" : "storyEn"];
  const stem = selectedItem[language === "vi" ? "stemVi" : "stemEn"];
  $("#speak-button").setAttribute("aria-label", `${currentCopy("listen")}: ${title}`);
  $("#speak-button").dataset.speech = `${title}. ${story} ${stem}`;
}

function renderStem() {
  $("#stem-grid").innerHTML = currentCopy("stem").map((pillar, index) => `
    <article class="stem-card">
      <div class="stem-card__top"><span class="stem-card__letter">${STEM_NAMES[index][0]}</span><span class="stem-card__icon"><svg viewBox="0 0 24 24" aria-hidden="true">${STEM_ICONS[index]}</svg></span></div>
      <h3><span class="vi-title">${pillar.vi}</span><span class="en-title">${pillar.en}</span></h3>
      <p>${language === "vi" ? pillar.descriptionVi : pillar.descriptionEn}</p>
    </article>`).join("");
}

function renderPrintSheet() {
  const cards = ITEMS.map((item) => `
      <article class="print-card">
        <div class="print-card__copy">
          <h2>${escapeAttribute(item.nameVi)}</h2>
          <h3>${escapeAttribute(item.nameEn)}</h3>
          <p>${escapeAttribute(item.shortVi)}<br><em>${escapeAttribute(item.shortEn)}</em></p>
        </div>
        <div class="print-card__target"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8a6 6 0 0 1 8 0m-6-2a3.5 3.5 0 0 1 4 0M5 5a10 10 0 0 1 14 0m-7 5v8m-3-3 3 3 3-3"/></svg><span>NFC · CHẠM<br> TAP HERE</span></div>
      </article>`).join("");
  $("#print-sheet").innerHTML = [cards.slice(0, 4), cards.slice(4)].map((page) => `<section class="print-page">${page}</section>`).join("");
}

function selectItem(id, updateHistory = false, animateIntro = false) {
  const item = ITEMS.find((entry) => entry.id === id);
  if (!item) return;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  setSpeaking(false);
  selectedItem = item;
  renderCollection();
  renderDetail();
  if (updateHistory) {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("id", item.id);
    window.history.pushState({ itemId: item.id }, "", nextUrl);
  }
  if (animateIntro) startIntro();
}

function startIntro() {
  window.clearTimeout(introTimer);
  const intro = $("#nfc-intro");
  $("#detail-card").classList.add("is-hidden");
  intro.classList.remove("is-leaving");
  intro.classList.add("is-active");
  intro.setAttribute("aria-hidden", "false");
  introTimer = window.setTimeout(finishIntro, 900);
}

function finishIntro() {
  window.clearTimeout(introTimer);
  const intro = $("#nfc-intro");
  if (!intro.classList.contains("is-active")) return;
  intro.classList.add("is-leaving");
  window.setTimeout(() => {
    intro.classList.remove("is-active", "is-leaving");
    intro.setAttribute("aria-hidden", "true");
    $("#detail-card").classList.remove("is-hidden");
  }, 350);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function setSpeaking(speaking) {
  $("#equalizer").classList.toggle("is-speaking", speaking);
}

function buildEqualizer() {
  $("#equalizer").innerHTML = Array.from({ length: 12 }, () => "<span></span>").join("");
}

function speakItem() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast(currentCopy("speechUnavailable"));
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance($("#speak-button").dataset.speech);
  utterance.lang = language === "vi" ? "vi-VN" : "en-US";
  utterance.onstart = () => setSpeaking(true);
  utterance.onend = () => {
    setSpeaking(false);
    showToast(currentCopy("speechDone"));
  };
  utterance.onerror = (event) => {
    setSpeaking(false);
    if (event.error !== "canceled" && event.error !== "interrupted") showToast(currentCopy("speechError"));
  };
  window.speechSynthesis.speak(utterance);
}

async function copyNfcUrl() {
  const url = `${window.location.origin}${window.location.pathname}?id=${selectedItem.id}`;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.append(input);
      input.select();
      const copied = document.execCommand("copy");
      input.remove();
      if (!copied) throw new Error("Clipboard copy command was rejected.");
    }
    showToast(currentCopy("copied"));
  } catch (error) {
    console.error("Unable to copy NFC URL.", error);
    showToast(currentCopy("copyError"));
  }
}

function toggleExplodedView() {
  const active = $("#tag-stage").classList.toggle("is-exploded");
  $("#explode-button").setAttribute("aria-pressed", String(active));
  $("#tag-stage").setAttribute("aria-pressed", String(active));
  showToast(currentCopy(active ? "explodeOn" : "explodeOff"));
}

function printNametags() {
  window.print();
}

function init() {
  const requestedId = new URLSearchParams(window.location.search).get("id");
  const hasValidQuery = ITEMS.some((item) => item.id === requestedId);
  selectedItem = ITEMS.find((item) => item.id === requestedId) || ITEMS[0];
  buildEqualizer();
  setLanguage(language);
  if (hasValidQuery) startIntro();

  document.querySelectorAll(".language-switch__button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  $("#skip-intro").addEventListener("click", finishIntro);
  $("#speak-button").addEventListener("click", speakItem);
  $("#copy-button").addEventListener("click", copyNfcUrl);
  $("#explode-button").addEventListener("click", toggleExplodedView);
  $("#tag-stage").addEventListener("click", toggleExplodedView);
  $("#tag-stage").addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExplodedView();
    }
  });
  $("#print-button").addEventListener("click", printNametags);
  $("#print-button-bottom").addEventListener("click", printNametags);
  window.addEventListener("popstate", () => {
    const id = new URLSearchParams(window.location.search).get("id");
    selectItem(ITEMS.some((item) => item.id === id) ? id : ITEMS[0].id);
  });
}

init();
