const LEGACY_ITEMS = [
  {
    id: "luu-but",
    category: "memory",
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
    category: "science",
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
    category: "technology",
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
    category: "education",
    nameVi: "Sách Giáo Khoa Cũ & Tạp Chí Tuổi Học Trò",
    nameEn: "Worn-Out Textbooks & Classic Teen Magazines",
    shortVi: "Những trang sách sờn góc gắn liền với 60 mùa truyền lửa dưới mái trường Hoàng Văn Thụ.",
    shortEn: "Dog-eared pages tied to 60 seasons of knowledge at Hoang Van Thu High School.",
    storyVi: "Gáy sách mềm đi sau nhiều lần mở, góc trang được gấp lại để đánh dấu một bài học. Tạp chí chuyền tay lúc tan trường nằm cạnh sách giáo khoa — những vật bình dị lưu dấu từng lớp học qua nhiều thế hệ.",
    storyEn: "Book spines softened after countless readings; a folded page corner marked the lesson to return to. Teen magazines passed around after class beside the textbooks, ordinary objects that remember generations of students.",
    stemVi: "Ma sát tĩnh giữa các mặt bìa tạo lực hút nhỏ khiến trang giấy bám vào nhau; độ ẩm và hóa chất trong mực khiến giấy bị oxy hóa dần. Những dấu gấp ở góc trang là cách học sinh tổ chức trí nhớ thực tế, không phải dữ liệu số.",
    stemEn: "Static friction between pages causes them to stick lightly; humidity and ink chemistry gradually oxidize the paper. Folded corners are physical memory markers that organize learning without digital storage.",
    art: `<rect x="92" y="50" width="160" height="228" rx="10" fill="#f3eee2" stroke="#7a1c1c" stroke-width="3"/><rect x="112" y="34" width="160" height="228" rx="10" fill="#f6f1ea" stroke="#7a1c1c" stroke-width="3"/><path d="M115 96h118M115 126h118M115 156h92M115 188h118M115 218h98" fill="none" stroke="#987d54" stroke-width="2"/><path d="M138 90c18 13 38 44 0 71 16 12 30 31 8 47-11 8-16 52 21 67" fill="none" stroke="#c59b27" stroke-width="2"/><path d="M193 96c18 8 28 27 14 50-12 19 4 27 3 43 1 14-10 33-7 50" fill="none" stroke="#2a5c38" stroke-width="2"/><path d="M82 282h176" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "lo-sao",
    category: "science",
    nameVi: "Lò Sào Điện Cũ - Bếp Nấu Môn Hóa",
    nameEn: "Old Electric Stove & Chemistry Corner",
    shortVi: "Những trang thực hành hóa học và chiếc lò sào nhỏ giữ ký ức thí nghiệm đầu tiên.",
    shortEn: "A small stove and chemistry notes from first experiments in the practical lab.",
    storyVi: "Lò sào cũ là nơi học sinh học cách đo nhiệt, quan sát biến đổi hóa học và giữ bình tĩnh khi hợp chất đổi màu. Tiếng kêu nhỏ của điện trở gắn với những buổi học thực hành khó quên.",
    storyEn: "The old electric stove was where students learned to measure heat, watch chemical change, and stay calm when compounds changed color. The hiss of the heating element is tied to unforgettable practical lessons.",
    stemVi: "Dòng điện qua điện trở tạo nhiệt theo định luật Joule: Q = I²Rt. Nhiệt làm tăng tốc độ phản ứng, giúp các chất hóa học chuyển từ trạng thái ban đầu thành sản phẩm mới trong quá trình phân hủy hay đồng hóa.",
    stemEn: "Current through a resistive element produces heat according to Joule’s law: Q = I²Rt. The generated heat speeds chemical reactions and changes matter from reactants to products.",
    art: `<rect x="94" y="70" width="150" height="190" rx="8" fill="#f3efe3" stroke="#1e1b18" stroke-width="3"/><circle cx="130" cy="155" r="22" fill="#d8d0bd" stroke="#7a1c1c" stroke-width="2"/><circle cx="190" cy="155" r="22" fill="#d8d0bd" stroke="#7a1c1c" stroke-width="2"/><path d="M111 120h18M191 120h18M126 103h64M112 191h102" stroke="#2a5c38" stroke-width="2"/><path d="M150 77v44M170 77v44M86 193h166" stroke="#c59b27" stroke-width="2"/><rect x="110" y="206" width="94" height="24" fill="#7a1c1c"/><path d="M84 275h170" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "cap-long",
    category: "engineering",
    nameVi: "Cặp Lồng Trường & Đồng Hồ Dành Cho Học Sinh",
    nameEn: "School Satchel & Timepiece",
    shortVi: "Từ chiếc cặp lồng đến chiếc đồng hồ tay, cả hai đều ghi dấu thời gian học sinh.",
    shortEn: "From the school satchel to the wristwatch, both measured the rhythm of student life.",
    storyVi: "Cặp lồng nhôm hay cặp da từng thấm mùi giấy, bút chì và mưa chiều. Một chiếc đồng hồ cũ trên cổ tay nhắc nhở con người cứ đúng giờ, đúng thứ tự, đúng kỷ luật của trường học.",
    storyEn: "A metal or leather satchel carried chalk dust, notebooks, and the smell of rain after school. A wristwatch reminded students to stay on time, in order, and in step with school routines.",
    stemVi: "Đồng hồ cơ và đồng hồ điện tử dựa trên cơ chế dao động điều khiển thời gian. Cặp lồng được thiết kế với khung chịu lực, vỏ mỏng nhưng bền, tối ưu khối lượng và độ cứng trong quá trình mang theo sách vở.",
    stemEn: "Mechanical and electronic watches rely on controlled oscillations to track time. School satchels are engineered with load-bearing frames and lightweight materials to balance strength and portability.",
    art: `<rect x="104" y="60" width="117" height="170" rx="12" fill="#dfe7d8" stroke="#1e1b18" stroke-width="3"/><path d="M125 60V43h70v17M114 92h96M114 168h96" stroke="#2a5c38" stroke-width="2"/><rect x="115" y="121" width="90" height="33" rx="4" fill="#f3eee2" stroke="#7a1c1c" stroke-width="2"/><path d="M146 166v18M178 166v18" stroke="#c59b27" stroke-width="2"/><circle cx="222" cy="206" r="28" fill="#f5f0e9" stroke="#7a1c1c" stroke-width="3"/><path d="M219 191v15m9-17 4 7m-24 6 17 8" stroke="#2a5c38" stroke-width="2"/><path d="M82 279h170" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "coi-da",
    category: "heritage",
    nameVi: "Còi Đá Năm Cũ & Luật Lớp Học",
    nameEn: "Old Bell Stone & Classroom Rules",
    shortVi: "Tín hiệu dừng, bắt đầu, và trật tự học đường trong từng nhịp chuông.",
    shortEn: "Signals that started and ended lessons, teaching order and discipline.",
    storyVi: "Còi trường hay chiếc chuông cũ là nhịp đếm của một buổi học. Nó dẫn dắt mình vào giờ vào lớp, giờ ra chơi, giờ tan trường — như một nhạc cụ mang hình thức và kỷ luật.",
    storyEn: "The school whistle or old bell set the rhythm of the day. It ushered students into lessons, recess, and dismissal like a measured instrument of order and routine.",
    stemVi: "Âm thanh được tạo bởi dao động của không khí khi màng hoặc cột khí rung lên. Tần số dao động xác định cao độ; độ lớn của biên độ quyết định cường độ âm, tạo âm báo hiệu rõ nhất trong môi trường học đường.",
    stemEn: "Sound is created by oscillating air pressure when a diaphragm or column vibrates. Frequency determines pitch and amplitude determines loudness, making the signal effective as a school alarm.",
    art: `<path d="M132 62h56v70h-56z" fill="#f2eae0" stroke="#1e1b18" stroke-width="3"/><path d="M147 62v-22h26v22M118 152h84" stroke="#7a1c1c" stroke-width="2"/><path d="M120 152c11 18 17 45-2 78h84c-19-32-9-58 0-78" fill="#d9c7a6" stroke="#2a5c38" stroke-width="2"/><circle cx="160" cy="194" r="15" fill="#f8f0de" stroke="#c59b27" stroke-width="2"/><path d="M95 262h130" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "banh-day",
    category: "legacy",
    nameVi: "Bánh Dây Sợi Lịch Sử & Học Tập",
    nameEn: "Memory String & Learning Circle",
    shortVi: "Một vòng tay gắn lời nhắc nhở của những năm tháng trường học.",
    shortEn: "A thread of memory that tied lessons, friendships, and school rituals together.",
    storyVi: "Bánh dây hay sợi chỉ được dùng để đính dấu, ghim giấy, và nhiều lần thành vật kỷ niệm. Dù nhỏ, nó là biểu tượng của sự gắn kết giữa học sinh, thầy cô và thời gian.",
    storyEn: "A cord or string kept papers together and served as a handmade reminder of school life. Small yet enduring, it symbolizes the link between students, teachers, and time.",
    stemVi: "Một sợi dây chịu lực kéo theo ứng suất và biến dạng đàn hồi. Khi được buộc hoặc xoắn, nó lưu trữ năng lượng biến dạng và cho thấy ứng dụng của độ bền vật liệu, lực căng và ma sát ở lớp học thực tế.",
    stemEn: "A cord bears tension and elastic strain. When tied or twisted, it stores potential energy and demonstrates material strength, tension, and friction in a tangible form.",
    art: `<path d="M130 83c0-18 22-32 43-32s43 14 43 32-22 32-43 32-43-14-43-32zm8 0c0 12 16 21 35 21 19 0 35-9 35-21M116 97c0-21 21-37 45-37s45 16 45 37-21 37-45 37-45-16-45-37ZM110 177c16-18 58-25 101 0M116 202c18-12 52-18 88 0M98 239h132" stroke="#7a1c1c" stroke-width="2" fill="none"/><circle cx="160" cy="120" r="14" fill="#f5c66e" stroke="#c59b27" stroke-width="2"/><path d="M80 272h162" stroke="#2a5c38" stroke-width="2"/>`
  },
  {
    id: "bang-ten",
    category: "identity",
    nameVi: "Bảng Tên Trường & Bài Học Tự Khẳng Định",
    nameEn: "School Name Plate & Self-Identity Lesson",
    shortVi: "Bảng tên là lời nhắc rằng mỗi học sinh đều mang một tên, một giá trị và một truyền thống.",
    shortEn: "A name plate reminds every student that identity and belonging are built through care and discipline.",
    storyVi: "Một tấm bảng tên nhỏ đặt ở góc bàn, gần chiếc bút và vở, nhắc tới trách nhiệm của người học với bản thân và cộng đồng. Nó là vật biểu tượng cho sự hiện diện, kỷ luật và tự tin.",
    storyEn: "A small name plate placed beside a notebook and a pen reminds students of responsibility to self and community. It is a symbol of presence, discipline, and quiet confidence.",
    stemVi: "Bề mặt bảng tên sử dụng vật liệu gia cố cùng bề mặt in rõ để chống mòn và dễ đọc. Các nguyên lý thiết kế thông tin nhấn mạnh độ tương phản, kích thước, và khoảng cách để truyền tải rõ nghĩa trong môi trường trường học.",
    stemEn: "The name plate uses durable material and high-contrast printing to resist wear and remain readable. Information design principles use contrast, scale, and spacing to communicate clearly in school settings.",
    art: `<rect x="98" y="70" width="126" height="175" rx="8" fill="#f9f5ee" stroke="#1e1b18" stroke-width="3"/><rect x="114" y="91" width="94" height="38" rx="4" fill="#ddeaf8" stroke="#0084d1" stroke-width="2"/><path d="M125 110h74" stroke="#1b2a5e" stroke-width="2"/><path d="M130 143h58M130 161h64M130 179h72" stroke="#7a1c1c" stroke-width="2"/><path d="M116 210h90" stroke="#2a5c38" stroke-width="2"/><path d="M84 267h156" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "thung-mau",
    category: "laboratory",
    nameVi: "Thùng Mẫu Tài Liệu & Băng Giấy Khoa Học",
    nameEn: "Lab Document Box & Scientific Tape",
    shortVi: "Ký ức của những giờ thí nghiệm, báo cáo và sổ tay khoa học đầy đầu mối ghi chép.",
    shortEn: "A memory of experiments, lab reports, and neatly organized scientific notes.",
    storyVi: "Thùng tài liệu và băng giấy hoạt động như một kho lưu trữ khối lượng lớn kiến thức từng được học sinh dán lên tường, cột sổ, hoặc đặt trong hộp. Mỗi mảnh giấy là một phần của quá trình đồng hóa tri thức.",
    storyEn: "The document box and scientific tape function like a compact archive of knowledge pinned to walls and tucked into folders. Each sheet recalls a lesson in analyzing and retaining information.",
    stemVi: "Băng dính và chất liệu giấy dựa trên lực bám cơ học và độ dính bề mặt. Khi tiếp xúc với vật liệu khác, lực liên phân tử quyết định độ bền của lớp dán, đóng vai trò trong thí nghiệm và ghi chép khoa học.",
    stemEn: "Tape and paper rely on mechanical adhesion and surface interactions. Molecular forces between materials determine the strength of the bond and help turn notes into stable, testable records.",
    art: `<rect x="92" y="53" width="150" height="198" rx="12" fill="#f5efe6" stroke="#1e1b18" stroke-width="3"/><rect x="110" y="80" width="114" height="128" rx="6" fill="#f9f8f4" stroke="#0084d1" stroke-width="2"/><path d="M120 100h94M120 122h94M120 144h70M120 166h65" stroke="#7a1c1c" stroke-width="2"/><path d="M110 214h116" stroke="#2a5c38" stroke-width="2"/><path d="M88 246h150" stroke="#c59b27" stroke-width="2"/>`
  },
  {
    id: "cam-hoa",
    category: "culture",
    nameVi: "Cắm Hoa Tại Lễ Khai Giảng & Tết Trường",
    nameEn: "School Ceremony Flowers & Festival Rituals",
    shortVi: "Hoa tươi, sự trang nghiêm và những khoảnh khắc lễ nghi trường học gắn với cảm xúc lớn.",
    shortEn: "Fresh flowers, ceremony, and school rituals remembered with warmth and pride.",
    storyVi: "Hoa được đặt trong các lễ khai giảng hay ngày hội trường không chỉ để đẹp mắt, mà còn để nhắc nhở về sự trân trọng, lòng biết ơn và giá trị của từng mùa học mới.",
    storyEn: "Flowers arranged for opening ceremonies or school festivals were not just beautiful; they signaled respect, gratitude, and the arrival of a new academic season.",
    stemVi: "Cấu trúc hoa và sự thấm hút của thân cây là ví dụ về truyền dẫn nước và quang hợp. Những sắc màu sặc sỡ dẫn tới quá trình hấp thụ ánh sáng và phục vụ cho sự sinh trưởng, là hiện tượng tự nhiên có tính thẩm mỹ cao.",
    stemEn: "Flower structure and capillary water transport are examples of plant physiology. Their bright colors and petals also draw attention to the sun and support growth, combining natural beauty with scientific function.",
    art: `<path d="M160 70c-18 0-30 14-30 29 0 12 9 22 20 30-10 3-17 13-17 24 0 18 15 31 35 31s35-13 35-31c0-11-7-21-17-24 11-8 20-18 20-30 0-15-12-29-30-29Z" fill="#f5d77b" stroke="#7a1c1c" stroke-width="2"/><circle cx="145" cy="100" r="12" fill="#f59e0b"/><circle cx="176" cy="111" r="12" fill="#0084d1"/><circle cx="160" cy="135" r="11" fill="#0a6836"/><path d="M160 152v50M130 190c14-13 24-6 30 0 6 6 16 13 30 0" fill="none" stroke="#2a5c38" stroke-width="2"/><path d="M90 258h140" stroke="#7a1c1c" stroke-width="2"/>`
  }
];

const DEFAULT_ITEMS = [
  {
    "id": "tt1", "category": "education", "image": "./photos/tt1.jpg",
    "nameVi": "Tạp Chí Văn Học và Tuổi Trẻ – Tháng 2/2002", "nameEn": "Literature and Youth Magazine – February 2002",
    "shortVi": "Số 2 (68) của đặc san Văn học và Tuổi trẻ, xuất bản tháng 2 năm 2002.", "shortEn": "Issue 2 (68) of Literature and Youth, published in February 2002.",
    "storyVi": "Trang bìa ghi lại một ấn phẩm văn học dành cho tuổi trẻ đầu những năm 2000. Những cuốn đặc san như thế có thể đưa người đọc trở lại không khí đọc sách và học văn của một thời.", "storyEn": "The cover preserves a literary publication for young readers from the early 2000s. Issues like this evoke the reading and literature lessons of an earlier time.",
    "stemVi": "Giấy gồm mạng sợi cellulose; ánh sáng, độ ẩm và nhiệt có thể thúc đẩy quá trình lão hóa. Bảo quản nơi khô, tránh ánh sáng mạnh giúp giảm hư hại.", "stemEn": "Paper consists of a network of cellulose fibres; light, humidity and heat can accelerate ageing. Dry storage away from strong light helps reduce damage."
  },
  {
    "id": "tt2", "category": "nature", "image": "./photos/tt2.jpg", "images": ["./photos/tt2.jpg"],
    "nameVi": "Hoa Phượng Đỏ Ép", "nameEn": "Pressed Red Flamboyant Flower",
    "shortVi": "Cánh hoa phượng vĩ đỏ thắm ép khô tạo hình cánh bướm trên nền giấy sáng.", "shortEn": "Crimson royal poinciana petals pressed and shaped into a butterfly keepsake on light backing.",
    "storyVi": "Hoa phượng đỏ từ lâu đã là biểu tượng của mùa chia tay và tuổi học trò. Những cánh phượng nhặt trên sân trường được ép phẳng giữa trang vở, khéo léo xếp thành hình cánh bướm kèm dòng chữ 'Kỷ Niệm !' ở mặt sau, gói trọn cả một mùa hè rực rỡ dưới mái trường THPT Hoàng Văn Thụ.", "storyEn": "The red flamboyant flower has long been the timeless symbol of school summers and farewells. Fallen petals gathered from the schoolyard were carefully pressed between notebook pages and arranged into a butterfly keepsake, preserving memories of vibrant summers at Hoang Van Thu High School.",
    "stemVi": "Hóa sinh Sắc tố & Bảo quản Thực vật: Sắc đỏ của cánh hoa phượng tạo bởi hợp chất Anthocyanin (Pelargonidin và Cyanidin glycoside). Khi ép khô tách nước nhanh trong môi trường thiếu sáng và cán màng Polymer kín khí, hoạt tính của enzym oxy hóa Polyphenol oxidase bị ức chế, giúp giữ nguyên mạng mạch cánh hoa và sắc màu hoài cổ qua nhiều năm.", "stemEn": "Pigment Biochemistry & Botanical Preservation: The crimson hue of flamboyant petals comes from anthocyanin pigments. Rapid dehydration under pressure followed by airtight polymer lamination inhibits polyphenol oxidase enzymes, preserving the delicate petal veins and warm vintage color for years."
  },
  {
    "id": "tt3", "category": "education", "image": "./photos/tt3.jpg",
    "nameVi": "Tạp Chí Văn Học và Tuổi Trẻ – Tháng 3/2002", "nameEn": "Literature and Youth Magazine – March 2002",
    "shortVi": "Số 3 (69), tháng 3 năm 2002, với bìa hình học sinh áo dài trắng.", "shortEn": "Issue 3 (69), March 2002, with students in white áo dài on the cover.",
    "storyVi": "Hình ảnh học sinh trên bìa gợi đến những giờ học, tình bạn và thói quen đọc của tuổi trẻ. Số báo là một mảnh tư liệu của văn hóa học đường năm 2002.", "storyEn": "The students on the cover evoke classes, friendships and youthful reading habits. The issue is a small record of school culture in 2002.",
    "stemVi": "Trong in màu, các lớp mực cyan, magenta, vàng và đen thường được chồng lên nhau. Các chấm in nhỏ tạo nên hình ảnh và những sắc độ mà mắt cảm nhận.", "stemEn": "Colour printing commonly layers cyan, magenta, yellow and black inks. Small printed dots combine to produce the image and tones perceived by the eye."
  },
  {
    "id": "tt4", "category": "education", "image": "./photos/tt4.jpg",
    "nameVi": "Tạp Chí Văn Học và Tuổi Trẻ – Tháng 10/2002", "nameEn": "Literature and Youth Magazine – October 2002",
    "shortVi": "Số 10 (76), tháng 10 năm 2002, với tranh minh họa trên bìa.", "shortEn": "Issue 10 (76), October 2002, with an illustrated cover.",
    "storyVi": "Một bìa báo khác trong bộ đặc san lưu lại nét minh họa và thiết kế của đầu thập niên 2000. Những trang giấy cũ mở ra cơ hội khám phá cách văn học từng đến với học sinh.", "storyEn": "Another cover in the series preserves the illustration and design of the early 2000s. Its old pages invite us to explore how literature reached students.",
    "stemVi": "Mực in và sợi giấy thay đổi theo thời gian do ánh sáng, oxy và độ ẩm. Lưu trữ ổn định, tránh ánh nắng trực tiếp, giúp làm chậm các quá trình này.", "stemEn": "Printing inks and paper fibres change over time through exposure to light, oxygen and moisture. Stable storage away from direct sun slows these processes."
  },
  {
    "id": "tt5", "category": "memory", "image": "./photos/tt5.jpg",
    "nameVi": "Giấy Viết Thư Hình Mèo và Chó", "nameEn": "Cat-and-Dog Decorative Letter Paper",
    "shortVi": "Tờ giấy viết thư có viền xanh và hình thú cưng.", "shortEn": "Letter paper with a green border and pet illustrations.",
    "storyVi": "Tờ giấy trang trí gợi lại thời học trò chọn giấy thật đẹp trước khi viết một lời nhắn. Khoảng trắng ở giữa dành cho những câu chuyện và tình cảm của người viết.", "storyEn": "This decorative sheet recalls choosing special stationery before writing a note. The blank centre leaves room for the writer's stories and feelings.",
    "stemVi": "Giấy được tạo từ các sợi cellulose liên kết thành mạng. Thiết kế viền giúp phân chia không gian thị giác giữa hình trang trí và phần dành để viết.", "stemEn": "Paper is made from cellulose fibres bonded into a network. The border visually separates the decoration from the space intended for writing."
  },
  {
    "id": "tt6", "category": "memory", "image": "./photos/tt6.jpg",
    "nameVi": "Giấy Viết Thư Hoa và Thú Bông", "nameEn": "Floral and Teddy Bear Letter Paper",
    "shortVi": "Giấy viết thư kẻ dòng, trang trí hoa và hình thú bông.", "shortEn": "Lined writing paper decorated with flowers and teddy bears.",
    "storyVi": "Những đường kẻ và hình trang trí đầy màu sắc gợi những lá thư viết tay gửi bạn bè. Một tờ giấy nhỏ có thể là nơi lưu giữ những lời hỏi thăm gần gũi.", "storyEn": "Colourful illustrations and ruled lines recall handwritten letters to friends. A small sheet can hold a thoughtful message across time.",
    "stemVi": "Các đường kẻ song song tạo chuẩn căn hàng cho chữ viết. Hoa văn nhiều màu được tạo bằng mực in; sắc màu nhìn thấy phụ thuộc vào ánh sáng phản xạ từ bề mặt giấy.", "stemEn": "Parallel ruled lines provide a guide for handwriting. Printed colours are perceived through the light reflected from the paper's surface."
  },
  {
    "id": "tt7", "category": "education", "image": "./photos/tt7.jpg",
    "nameVi": "Thiệp Chúc Mừng Ngày Nhà Giáo Việt Nam", "nameEn": "Vietnamese Teachers' Day Greeting Card",
    "shortVi": "Thiệp gấp có hình thầy cô, học sinh và lời chúc Ngày Nhà giáo.", "shortEn": "A folded card featuring teachers, students and a Teachers' Day greeting.",
    "storyVi": "Tấm thiệp gợi dịp học sinh bày tỏ lòng biết ơn với thầy cô nhân Ngày Nhà giáo Việt Nam. Nếp gấp và phần bên trong chừa chỗ cho những lời nhắn riêng.", "storyEn": "The card evokes the occasion when students express gratitude to teachers on Vietnamese Teachers' Day. Its folded form leaves space inside for a personal note.",
    "stemVi": "Nếp gấp biến một tấm bìa phẳng thành cấu trúc mở–đóng. Sợi giấy bị biến dạng tại đường gấp, vì vậy tạo rãnh trước khi gấp có thể giúp hạn chế rách.", "stemEn": "A fold turns a flat piece of card into an opening structure. Paper fibres deform at the crease, so scoring before folding can help prevent tearing."
  },
  {
    "id": "tt8", "category": "memory", "image": "./photos/tt8.jpg",
    "nameVi": "Giấy Viết Thư Họa Tiết Hoa và Ngôi Sao", "nameEn": "Flower and Star Letter Paper",
    "shortVi": "Tờ giấy kẻ dòng màu tím nhạt, có hoa và họa tiết ngôi sao.", "shortEn": "Pale purple ruled letter paper with flowers and stars.",
    "storyVi": "Một mẫu giấy viết thư khác lưu lại gu trang trí đầy màu sắc của thời thư tay. Những dòng kẻ từng chờ đợi một câu chuyện được gửi tới người nhận.", "storyEn": "Another letter-paper design preserves the colourful style of handwritten correspondence. Its lines waited for a story to be sent to someone.",
    "stemVi": "Khi ánh sáng chiếu lên giấy, mực hấp thụ một phần bước sóng và phản xạ phần còn lại, tạo nên màu sắc quan sát được. Các đường kẻ giúp giữ chữ viết ngay hàng.", "stemEn": "When light falls on the paper, inks absorb some wavelengths and reflect others, producing the colours we see. The lines help keep handwriting aligned."
  },
  {
    "id": "tt9", "category": "design", "image": "./photos/tt9.jpg",
    "nameVi": "Giá Treo Đồ Hình Cành Cây Màu Xanh", "nameEn": "Green Branch-Shaped Desk Stand",
    "shortVi": "Giá treo nhỏ có các nhánh và chân đế loe.", "shortEn": "A small branch-shaped stand with a flared base.",
    "storyVi": "Hình cành cây đưa một nét tự nhiên vào góc bàn học. Các nhánh có thể dùng để treo những vật nhỏ và giúp sắp xếp không gian gọn gàng.", "storyEn": "The branch form brings a touch of nature to a desk. Its branches can hold small objects and help keep a space organised.",
    "stemVi": "Chân đế rộng giúp giá ổn định hơn khi trọng tâm nằm trên vùng tiếp xúc. Vật treo lệch tạo mô-men lực và có thể khiến giá bị lật nếu quá nặng.", "stemEn": "A wider base improves stability when the centre of mass remains above the support area. An uneven hanging load creates torque and can tip the stand if too heavy."
  },
  {
    "id": "tt10", "category": "art", "image": "./photos/tt10.jpg",
    "nameVi": "Tượng Trang Trí Người Mặc Áo Dài và Nón Lá", "nameEn": "Decorative Figure in Áo Dài and Conical Hat",
    "shortVi": "Tượng nhỏ mô tả một người mặc áo dài trắng và đội nón lá.", "shortEn": "A small figure depicting a person in a white áo dài and conical hat.",
    "storyVi": "Tượng tái hiện trang phục và hình ảnh quen thuộc trong văn hóa Việt Nam. Những nét vẽ nhỏ trên bề mặt tạo nên vẻ riêng cho vật trang trí.", "storyEn": "The figure depicts familiar elements of Vietnamese dress and culture. Small painted details give this decorative object its individual character.",
    "stemVi": "Sắc tố trong lớp sơn hấp thụ và phản xạ ánh sáng để tạo màu. Bề mặt, độ dày và điều kiện lưu trữ đều ảnh hưởng đến độ bền của lớp trang trí.", "stemEn": "Pigments in paint absorb and reflect light to produce colour. The surface, layer thickness and storage conditions all affect the durability of the decoration."
  },
  {
    "id": "tt11", "category": "technology", "image": "./photos/tt11.jpg",
    "nameVi": "Băng Cát-Xét Maxell UR 90", "nameEn": "Maxell UR 90 Audio Cassette",
    "shortVi": "Băng cát-xét Maxell UR 90 với hai cuộn băng trong vỏ nhựa.", "shortEn": "A Maxell UR 90 cassette with two reels inside a plastic shell.",
    "storyVi": "Cuộn băng gợi lại cách nghe và ghi âm trước thời phát nhạc trực tuyến: lắp băng, tua tới bài hát và lắng nghe. Nhãn viết tay cũng có thể giúp nhận diện nội dung từng được lưu trên băng.", "storyEn": "The cassette recalls listening and recording before streaming: inserting a tape, winding to a track and pressing play. A handwritten label could help identify what was recorded.",
    "stemVi": "Băng từ chứa các hạt vật liệu từ trên lớp phủ. Đầu ghi thay đổi sự từ hóa theo tín hiệu âm thanh; khi phát, đầu đọc chuyển biến thiên từ trường thành tín hiệu điện.", "stemEn": "Magnetic tape has magnetic particles in its coating. A recording head changes their magnetisation with the audio signal; during playback, a head converts changing magnetic flux into an electrical signal."
  },
  {
    "id": "tt12", "category": "memory", "image": "./photos/tt12.jpg",
    "nameVi": "Ống Đựng Trang Trí Chữ “Love”", "nameEn": "Decorative “Love” Container",
    "shortVi": "Ống đựng hình trụ có hình đôi bạn và chữ Love trên trái tim.", "shortEn": "A cylindrical container decorated with two figures and a heart reading Love.",
    "storyVi": "Ống đựng nhỏ với hình đôi bạn gợi một món quà trang trí hoặc vật dụng để bàn. Các chi tiết nổi và chữ trên trái tim tạo điểm nhấn cho kỷ vật.", "storyEn": "The small container, decorated with a pair of figures, suggests a gift or desk accessory. Raised details and lettering on the heart give it a distinctive character.",
    "stemVi": "Hình trụ bao quanh một khoảng rỗng để chứa đồ. Các chi tiết nổi tạo bóng khác nhau theo hướng chiếu sáng, giúp mắt nhận biết hình dạng bề mặt.", "stemEn": "A cylindrical wall encloses a hollow space for holding objects. Raised details cast different shadows as lighting changes, helping the eye perceive surface shape."
  },
  {
    "id": "tt13", "category": "education", "image": "./photos/tt13.jpg",
    "nameVi": "Bút Kim Loại Trong Hộp Trưng Bày", "nameEn": "Metal Pen in a Display Case",
    "shortVi": "Một cây bút màu kim loại được đặt trong hộp có nắp trong.", "shortEn": "A metallic-coloured pen displayed in a transparent-lidded case.",
    "storyVi": "Cây bút được giữ trong hộp, gợi những món quà lưu niệm và công việc viết lách. Hộp giúp người xem nhìn thấy hình dáng cây bút mà không cần trực tiếp cầm vào.", "storyEn": "Kept in its case, the pen recalls commemorative gifts and the work of writing. The case lets visitors see its shape without handling it directly.",
    "stemVi": "Vỏ bút tạo kết cấu bảo vệ và điểm cầm. Nắp trong cho ánh sáng truyền qua, đồng thời giúp hạn chế bụi tiếp xúc trực tiếp với vật bên trong.", "stemEn": "The pen body provides a protective structure and a grip. The transparent lid transmits light while helping limit direct dust exposure to the object inside."
  },
  {
    "id": "tt14", "category": "heritage", "image": "./photos/tt14.jpg",
    "nameVi": "Đĩa Kỷ Niệm 50 Năm Thành Lập Trường (1966 – 2016)", "nameEn": "School 50th Anniversary Commemorative Plate (1966–2016)",
    "shortVi": "Đĩa kỷ niệm có hình ngôi trường và dòng chữ kỷ niệm 50 năm.", "shortEn": "A commemorative plate showing the school and its 50th-anniversary dates.",
    "storyVi": "Dòng chữ trên đĩa ghi dấu 50 năm thành lập trường từ 1966 đến 2016. Hình ảnh ngôi trường trên hiện vật đưa người xem trở về một cột mốc trong hành trình của nhiều thế hệ.", "storyEn": "The inscription marks the school's 50th anniversary from 1966 to 2016. Its image of the school takes visitors back to a milestone shared by generations.",
    "stemVi": "Đồ gốm sứ được tạo hình từ nguyên liệu khoáng và nung ở nhiệt độ cao. Lớp men thủy tinh trên bề mặt có thể giúp giảm độ thấm và bảo vệ trang trí.", "stemEn": "Ceramics are shaped from mineral materials and fired at high temperature. A glassy glaze can reduce surface porosity and protect decoration."
  },
  {
    "id": "tt15", "category": "art", "image": "./photos/tt15.jpg",
    "nameVi": "Vòng Hoa Trang Trí Tím Trắng", "nameEn": "Purple and White Decorative Flower Wreath",
    "shortVi": "Vòng hoa nhỏ với các bông tím, trắng và dây ruy băng.", "shortEn": "A small wreath of purple and white flowers with ribbon ties.",
    "storyVi": "Các bông hoa được xếp quanh một vòng, kết hợp dây ruy băng mềm. Vật trang trí gợi không khí của những buổi chụp ảnh và dịp gặp gỡ.", "storyEn": "Flowers are arranged around a ring and paired with soft ribbons. The decoration evokes photographs and special gatherings.",
    "stemVi": "Khung vòng giữ các phần trang trí theo một đường cong. Màu tím và trắng tạo tương phản thị giác, còn dây buộc giúp điều chỉnh cách cố định vòng.", "stemEn": "The ring supports the decorations along a curve. Purple and white provide visual contrast, while the ribbons allow the wreath to be tied in place."
  },
  {
    "id": "tt16", "category": "art", "image": "./photos/tt16.jpg",
    "nameVi": "Quạt Xếp Tranh Phong Cảnh", "nameEn": "Landscape Folding Fan",
    "shortVi": "Quạt xếp có nan màu gỗ và tranh phong cảnh nhiều màu.", "shortEn": "A folding fan with wood-coloured ribs and a colourful landscape.",
    "storyVi": "Bức tranh trải rộng khi quạt mở và thu lại thành một dải nhỏ khi gấp. Quạt vừa là vật dụng quen thuộc vừa mang một hình ảnh phong cảnh trang trí.", "storyEn": "The landscape spreads out when the fan opens and folds into a narrow bundle when closed. The fan is both a familiar tool and a decorative image.",
    "stemVi": "Các nan quạt quay quanh một chốt chung, tạo thành hình gần một hình quạt tròn. Khi phe phẩy, quạt đẩy không khí qua da và tăng trao đổi nhiệt đối lưu.", "stemEn": "The ribs pivot around a common pin to form a sector-like shape. Waving the fan moves air across the skin and increases convective heat transfer."
  },
  {
    "id": "tt17", "category": "technology", "image": "./photos/tt17.jpg",
    "nameVi": "Mô Hình Xe Máy Màu Đen", "nameEn": "Black Motorcycle Model",
    "shortVi": "Mô hình xe máy có bánh xe, yên và các chi tiết màu kim loại.", "shortEn": "A motorcycle model with wheels, seats and metallic details.",
    "storyVi": "Mô hình thu nhỏ một chiếc xe máy kiểu cổ điển, từ tay lái đến bánh và động cơ. Việc quan sát các bộ phận giúp hình dung cấu tạo của phương tiện quen thuộc.", "storyEn": "The miniature reproduces a classic-style motorcycle from its handlebars to its wheels and engine. Examining its parts helps us understand a familiar vehicle.",
    "stemVi": "Bánh xe quay quanh trục và tiếp xúc với mặt đường. Trên xe thực, hệ truyền động đưa mô-men từ động cơ đến bánh chủ động; mô hình thể hiện hình dáng một số bộ phận ấy.", "stemEn": "Wheels rotate around axles and contact the road. On a real motorcycle, the drivetrain transfers torque from the engine to the driven wheel; the model depicts some of those parts."
  },
  {
    "id": "tt18", "category": "technology", "image": "./photos/tt18.jpg",
    "nameVi": "Mô Hình Xe Đạp Màu Đen", "nameEn": "Black Bicycle Model",
    "shortVi": "Xe đạp thu nhỏ với giỏ, yên và hai bánh có nan hoa.", "shortEn": "A miniature bicycle with a basket, saddle and spoked wheels.",
    "storyVi": "Chiếc xe đạp mô hình gợi những con đường đến trường và những chuyến đi gần gũi. Kích thước thu nhỏ cho phép quan sát khung, bàn đạp và bánh xe cùng lúc.", "storyEn": "The miniature bicycle recalls journeys to school and familiar local rides. Its small scale lets visitors view the frame, pedals and wheels together.",
    "stemVi": "Nan hoa chịu lực kéo và giúp vành bánh giữ hình dạng. Trên xe đạp vận hành bằng xích, tỉ số số răng của hai đĩa xích liên quan đến tỉ số tốc độ quay của chúng.", "stemEn": "Spokes carry tension and help the wheel rim retain its shape. On a chain-driven bicycle, the sprockets' tooth counts determine their rotational speed ratio."
  },
  {
    "id": "tt19", "category": "nature", "image": "./photos/tt19.jpg",
    "nameVi": "Hộp Hoa Khô Trang Trí", "nameEn": "Dried Botanical Decoration Box",
    "shortVi": "Hộp trong chứa cánh hoa và các phần thực vật đã làm khô.", "shortEn": "A clear box containing dried petals and other botanical material.",
    "storyVi": "Những phần hoa và lá khô được giữ trong một hộp nhỏ, lưu lại màu sắc và hình dáng sau khi tươi. Cách sắp đặt gợi một món trang trí lấy cảm hứng từ thiên nhiên.", "storyEn": "Dried flowers and leaves are kept in a small box, preserving shapes and colours after drying. The arrangement suggests a decoration inspired by nature.",
    "stemVi": "Làm khô loại bớt nước khỏi mô thực vật, làm chậm nhiều quá trình phân hủy. Ánh sáng và độ ẩm vẫn có thể làm vật liệu đổi màu hoặc hư hại theo thời gian.", "stemEn": "Drying removes water from plant tissues and slows many processes of decay. Light and moisture can still cause fading or damage over time."
  }
];

const STORAGE_KEY = "stemee-items-v3";
const $ = (selector) => document.querySelector(selector);
const COPY = {
  vi: {
    skip: "Bỏ qua nội dung",
    collectionNav: "Bộ sưu tập",
    stemNav: "Bản vẽ STEM",
    print: "In thẻ NFC",
    eyebrow: "Triển lãm STEM · THPT Hoàng Văn Thụ",
    titleVi: "Thẻ tên NFC thông minh — Số hóa ký ức 60 năm",
    titleEn: "Smart NFC Nametag — A 60-Year Digital Memory Archive",
    intro: "Những hiện vật, câu chuyện học trò và khoa học đằng sau mỗi kỷ niệm. Chạm thẻ NFC để mở một ký ức.",
    browse: "Khám phá bộ sưu tập",
    anniversary: "Năm tháng học trò",
    nfcLine: "CHẠM THẺ · MỞ KÝ ỨC",
    collectionEyebrow: "Bộ sưu tập · Ký ức học đường",
    collectionTitleVi: "Những vật nhỏ, chuyện dài",
    collectionTitleEn: "Small Things, Long Stories",
    collectionNote: "Chọn một hiện vật để xem câu chuyện, nghe thuyết minh và khám phá mối nối STEM.",
    detailDivider: "Chạm để nhớ",
    nfcTap: "CHẠM ĐỂ MỞ",
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
    footerEn: "Một kho lưu trữ trường học hiện hữu qua khoa học.",
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
    intro: "Explore student memories and the science behind each keepsake. Tap an NFC tag to open a story from the school's heritage.",
    browse: "Browse the collection",
    anniversary: "Years of learning",
    nfcLine: "TAP A KEEPSAKE · OPEN A MEMORY",
    collectionEyebrow: "Keepsake collection · School memories",
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
let language = "vi";
let selectedItem = null;
let toastTimer;
let introTimer;
let introExitTimer;
let quickEdit = false;
let resetPending = false;
let ITEMS = loadPersistedItems();

function getSearchParams() {
  const queryString = typeof window !== "undefined" && window.location ? (window.location.search || "") : "";
  if (typeof URLSearchParams === "function") return new URLSearchParams(queryString);
  return { get: () => null };
}

function getUrlParam(name) {
  return getSearchParams().get(name);
}

function loadPersistedItems() {
  try {
    if (typeof localStorage === "undefined") return normalizeItems(DEFAULT_ITEMS);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) return normalizeItems(parsed);
    }
  } catch (error) {
    console.warn("Unable to read stored item data.", error);
  }
  return normalizeItems(DEFAULT_ITEMS);
}

async function hydrateDefaultItemsFromRemote() {
  if (typeof fetch !== "function" || window.location.protocol === "file:") return;
  try {
    const response = await fetch("./data/items.json");
    if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
    const remoteItems = await response.json();
    if (!Array.isArray(remoteItems) || !remoteItems.length) throw new Error("Empty or invalid catalog");
    const saved = typeof localStorage === "undefined" ? null : localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      ITEMS = normalizeItems(remoteItems);
      selectedItem = ITEMS[0] || null;
    }
  } catch (error) {
    console.warn("Unable to load remote item dataset.", error);
  }
}

function normalizeItems(items) {
  return items.map((item, index) => ({
    id: String(item.id || `item-${index + 1}`),
    category: item.category || "memory",
    nameVi: item.nameVi || "",
    nameEn: item.nameEn || "",
    shortVi: item.shortVi || "",
    shortEn: item.shortEn || "",
    storyVi: item.storyVi || "",
    storyEn: item.storyEn || "",
    stemVi: item.stemVi || "",
    stemEn: item.stemEn || "",
    image: typeof item.image === "string" ? item.image : "",
    images: Array.isArray(item.images) ? item.images.filter((image) => typeof image === "string" && image) : (item.image ? [item.image] : [])
  }));
}

function itemImages(item) {
  return item.images && item.images.length ? item.images : (item.image ? [item.image] : []);
}

function photoDescription(item) {
  return [item.nameVi, item.nameEn];
}

function resolveItem(id) {
  return ITEMS.find((item) => item.id === id) || LEGACY_ITEMS.find((item) => item.id === id);
}

function currentCopy(key) {
  return COPY[language][key] || key;
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
  if ($("#tag-stage")) $("#tag-stage").setAttribute("aria-label", currentCopy("layerInstruction"));
}

function makeIllustration(item, className = "") {
  const image = itemImages(item)[0];
  if (image) return `<img class="${escapeAttribute(className)}" src="${escapeAttribute(image)}" alt="${escapeAttribute(photoDescription(item, image)[0])}" loading="lazy">`;
  if (LEGACY_ITEMS.includes(item)) return `<svg class="${escapeAttribute(className)}" viewBox="0 0 320 320" role="img" aria-label="${escapeAttribute(item.nameVi)}" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="320" fill="#f0f8ff"/>${item.art}</svg>`;
  return `<span class="photo-empty">Chưa có ảnh / No photo</span>`;
}

function escapeAttribute(value = "") {
  return String(value).replace(/[&<>\"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderCollection() {
  if (!$("#artifact-grid")) return;
  $("#artifact-grid").innerHTML = ITEMS.map((item, index) => `
    <article class="artifact-card${item.id === selectedItem?.id ? " is-selected" : ""}">
      <button class="artifact-card__photo" type="button" data-zoom-item="${escapeAttribute(item.id)}" aria-label="Phóng to ảnh ${escapeAttribute(photoDescription(item, itemImages(item)[0])[0])}" ${itemImages(item).length ? "" : "disabled"}><span class="artifact-card__art">${makeIllustration(item)}</span>${itemImages(item).length ? '<span class="photo-zoom">Xem ảnh / Zoom</span>' : ""}</button>
      <button class="artifact-card__select" type="button" data-item-id="${escapeAttribute(item.id)}" aria-pressed="${item.id === selectedItem?.id}">
      <span class="artifact-card__meta"><span>${String(index + 1).padStart(2, "0")} / ${String(ITEMS.length).padStart(2, "0")}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg></span>
      <span class="artifact-card__title"><span class="vi-title">${escapeAttribute(item.nameVi)}</span><span class="en-title">${escapeAttribute(item.nameEn)}</span></span>
      </button>${quickEdit ? `<button class="quick-edit-button" type="button" data-edit-item="${escapeAttribute(item.id)}">Chỉnh sửa / <em>Edit</em></button>` : ""}
    </article>`).join("");
  $("#artifact-grid").querySelectorAll("[data-item-id]").forEach((button) => {
    button.addEventListener("click", () => selectItem(button.dataset.itemId, true, true));
  });
  $("#artifact-grid").querySelectorAll("[data-zoom-item]").forEach((button) => button.addEventListener("click", () => {
    const item = ITEMS.find((entry) => entry.id === button.dataset.zoomItem);
    if (item && itemImages(item)[0]) openLightbox(itemImages(item)[0], ...photoDescription(item, itemImages(item)[0]), button);
  }));
  $("#artifact-grid").querySelectorAll("[data-edit-item]").forEach((button) => button.addEventListener("click", () => {
    selectItem(button.dataset.editItem);
    openAdminPanel();
  }));
}

function renderDetail() {
  if (!selectedItem) return;
  const index = ITEMS.findIndex((item) => item.id === selectedItem.id);
  const photos = itemImages(selectedItem);
  $("#detail-art").innerHTML = photos.length ? photos.map((image, index) => `<div><button type="button" class="detail-photo" data-photo-index="${index}" aria-label="Phóng to ảnh ${escapeAttribute(photoDescription(selectedItem, image)[0])}"><img src="${escapeAttribute(image)}" alt="${escapeAttribute(photoDescription(selectedItem, image)[0])}"></button></div>`).join("") : makeIllustration(selectedItem);
  $("#detail-art").querySelectorAll("[data-photo-index]").forEach((button) => button.addEventListener("click", () => {
    const image = photos[Number(button.dataset.photoIndex)];
    openLightbox(image, ...photoDescription(selectedItem, image), button);
  }));
  $("#detail-title").innerHTML = `<span class="vi-title">${escapeAttribute(selectedItem.nameVi)}</span><span class="en-title">${escapeAttribute(selectedItem.nameEn)}</span>`;
  $("#tag-title-vi").textContent = selectedItem.nameVi;
  $("#tag-title-en").textContent = selectedItem.nameEn;
  $("#tag-index").textContent = index >= 0 ? `#${String(index + 1).padStart(2, "0")} / ${String(ITEMS.length).padStart(2, "0")}` : "";
  for (const field of ["short", "story", "stem"]) {
    $(`#detail-${field}`).innerHTML = `<span class="bilingual-vi">${escapeAttribute(selectedItem[`${field}Vi`])}</span><span class="bilingual-en">${escapeAttribute(selectedItem[`${field}En`])}</span>`;
  }
  $("#item-number").textContent = index >= 0 ? `${String(index + 1).padStart(2, "0")} / ${String(ITEMS.length).padStart(2, "0")}` : "Lưu trữ / Archive";
  updateSpeechText();
}

function updateSpeechText() {
  if (!selectedItem) return;
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
  const pageSize = 6;
  const pages = [];
  for (let index = 0; index < ITEMS.length; index += pageSize) {
    pages.push(ITEMS.slice(index, index + pageSize));
  }
  const cards = pages.map((page, pageIndex) => `<section class="print-page">${page.map((item, index) => `
      <article class="print-card">
        <header class="print-card__header">
          <img src="./photos/logo.jpg" alt="">
          <strong>60 NĂM THPT HOÀNG VĂN THỤ (1966 – 2026)</strong>
          <span>#${String(pageIndex * pageSize + index + 1).padStart(2, "0")} / ${String(ITEMS.length).padStart(2, "0")}</span>
        </header>
        <div class="print-card__body">
          <div class="print-card__copy">
            <h2>${escapeAttribute(item.nameVi)}</h2>
            <h3>${escapeAttribute(item.nameEn)}</h3>
            <div class="print-card__divider"></div>
            <p>${escapeAttribute(item.shortVi)}</p>
            <p lang="en">${escapeAttribute(item.shortEn)}</p>
          </div>
          <div class="print-card__target">
            <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="14" y="12" width="17" height="27" rx="3"/><path d="M20 35h5M32 17l-5 5m0-5v5h5"/><path class="nfc-signal" d="M30 7c3 1 5 3 6 6m-5-10c5 1 9 5 10 10"/></svg>
            <strong>CHẠM NFC TẠI ĐÂY</strong><em lang="en">TAP PHONE HERE</em>
          </div>
        </div>
        <footer class="print-card__base">
          <span class="print-card__fold">GẬP ĐẾ HOẶC CẮT RỜI / FOLD BASE OR TRIM</span>
          <strong>Tự hào truyền thống – Vững bước tương lai</strong>
          <em lang="en">Proud of our traditions – Stepping confidently into the future</em>
          <span>• Dự án STEM 11A2 •</span>
        </footer>
      </article>`).join("")}</section>`).join("");
  $("#print-sheet").innerHTML = cards;
}

function selectItem(id, updateHistory = false, animateIntro = false) {
  const item = resolveItem(id);
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
  if (animateIntro) {
    startIntro();
    $("#artifact-detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

let lightboxReturnFocus;
function openLightbox(src, vi, en, trigger) {
  lightboxReturnFocus = trigger;
  $("#lightbox-image").src = src;
  $("#lightbox-image").alt = vi;
  $("#lightbox-title .vi-title").textContent = vi;
  $("#lightbox-title .en-title").textContent = en;
  $("#lightbox").hidden = false;
  $("#lightbox-close").focus();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  if (lightboxReturnFocus) lightboxReturnFocus.focus();
}

function startIntro() {
  window.clearTimeout(introTimer);
  window.clearTimeout(introExitTimer);
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
  if (!intro.classList.contains("is-active") || intro.classList.contains("is-leaving")) return;
  intro.classList.add("is-leaving");
  introExitTimer = window.setTimeout(() => {
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
  const utterance = new SpeechSynthesisUtterance($("#speak-button").dataset.speech || "");
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
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("id", selectedItem.id);
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url.toString());
    } else {
      const input = document.createElement("textarea");
      input.value = url.toString();
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

function persistItems(items = ITEMS) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch (error) {
    console.error("Unable to save item data.", error);
    showToast("Không thể lưu trên thiết bị. Kiểm tra dung lượng hoặc quyền lưu trữ.");
    return false;
  }
}

function loadItemIntoForm(item) {
  if (!item) return;
  $("#admin-id").value = item.id || "";
  $("#admin-category").value = item.category || "memory";
  $("#admin-name-vi").value = item.nameVi || "";
  $("#admin-name-en").value = item.nameEn || "";
  $("#admin-short-vi").value = item.shortVi || "";
  $("#admin-short-en").value = item.shortEn || "";
  $("#admin-story-vi").value = item.storyVi || "";
  $("#admin-story-en").value = item.storyEn || "";
  $("#admin-stem-vi").value = item.stemVi || "";
  $("#admin-stem-en").value = item.stemEn || "";
  $("#admin-image-url").value = itemImages(item).join("\n");
  updatePhotoPicker();
}

function collectAdminFormData() {
  const item = {
    id: $("#admin-id").value.trim(),
    category: $("#admin-category").value.trim() || "memory",
    nameVi: $("#admin-name-vi").value.trim(),
    nameEn: $("#admin-name-en").value.trim(),
    shortVi: $("#admin-short-vi").value.trim(),
    shortEn: $("#admin-short-en").value.trim(),
    storyVi: $("#admin-story-vi").value.trim(),
    storyEn: $("#admin-story-en").value.trim(),
    stemVi: $("#admin-stem-vi").value.trim(),
    stemEn: $("#admin-stem-en").value.trim(),
    images: [...new Set($("#admin-image-url").value.split("\n").map((image) => image.trim()).filter(Boolean))]
  };
  item.image = item.images[0] || "";
  return item;
}

function validImagePath(value) {
  if (/^data:image\/(?:jpeg|png|webp|gif);base64,[a-z0-9+/=]+$/i.test(value)) return true;
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:", "file:"].includes(url.protocol);
  } catch {
    return false;
  }
}

function updatePhotoPicker() {
  const selected = $("#admin-image-url").value.split("\n").map((value) => value.trim());
  $("#photo-picker-grid").querySelectorAll("[data-photo-path]").forEach((button) => {
    button.setAttribute("aria-pressed", String(selected.includes(button.dataset.photoPath)));
  });
}

function buildPhotoPicker() {
  const paths = Array.from({ length: 19 }, (_, index) => `./photos/tt${index + 1}.jpg`).concat("./photos/logo.jpg");
  $("#photo-picker-grid").innerHTML = paths.map((path) => `<button type="button" data-photo-path="${path}" aria-label="${path}" aria-pressed="false"><img src="${path}" alt="" loading="lazy"><span>${path.split("/").pop()}</span></button>`).join("");
  $("#photo-picker-grid").querySelectorAll("[data-photo-path]").forEach((button) => button.addEventListener("click", () => {
    const paths = $("#admin-image-url").value.split("\n").map((value) => value.trim()).filter(Boolean);
    const index = paths.indexOf(button.dataset.photoPath);
    if (index >= 0) paths.splice(index, 1);
    else paths.push(button.dataset.photoPath);
    $("#admin-image-url").value = paths.join("\n");
    updatePhotoPicker();
  }));
}

function renderAdminList() {
  const list = $("#admin-list");
  if (!list) return;
  list.innerHTML = ITEMS.map((item) => `<li><button type="button" class="${selectedItem && item.id === selectedItem.id ? "is-selected" : ""}" data-admin-item="${escapeAttribute(item.id)}"><span class="vi-title">${escapeAttribute(item.nameVi || item.id)}</span><span class="en-title">${escapeAttribute(item.nameEn)}</span></button></li>`).join("");
  list.querySelectorAll("[data-admin-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = ITEMS.find((item) => item.id === button.dataset.adminItem);
      if (!target) return;
      selectedItem = target;
      loadItemIntoForm(target);
      renderCollection();
      renderDetail();
      renderAdminList();
    });
  });
}

function openAdminPanel() {
  $("#admin-panel").hidden = false;
  if (selectedItem) loadItemIntoForm(selectedItem);
  renderAdminList();
}

function closeAdminPanel() {
  $("#admin-panel").hidden = true;
}

function saveEditedItem() {
  const item = collectAdminFormData();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) {
    showToast("ID chỉ được chứa chữ thường, số và dấu gạch nối.");
    return;
  }
  if (!item.nameVi || !item.nameEn) {
    showToast("Vui lòng nhập tên tiếng Việt và tiếng Anh.");
    return;
  }
  if (item.images.some((image) => !validImagePath(image))) {
    showToast("Đường dẫn ảnh không hợp lệ. Dùng đường dẫn tương đối, HTTPS hoặc ảnh tải lên.");
    return;
  }
  const index = ITEMS.findIndex((entry) => entry.id === selectedItem?.id);
  if (ITEMS.some((entry, entryIndex) => entry.id === item.id && entryIndex !== index)) {
    showToast("ID đã tồn tại. Vui lòng chọn ID khác.");
    return;
  }
  const updated = [...ITEMS];
  if (index >= 0) updated[index] = item;
  else updated.push(item);
  if (!persistItems(updated)) return;
  ITEMS = updated;
  selectedItem = item;
  renderCollection();
  renderDetail();
  renderPrintSheet();
  renderAdminList();
  showToast("Item saved locally.");
}

async function handleImageUpload(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  try {
    const converted = await Promise.all(files.map((file) => new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) { reject(new Error("Not an image")); return; }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Unable to read image"));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("Unable to decode image"));
        image.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
            canvas.width = Math.max(1, Math.round(image.width * scale));
            canvas.height = Math.max(1, Math.round(image.height * scale));
            const context = canvas.getContext("2d");
            if (!context) throw new Error("Canvas unavailable");
            context.fillStyle = "#ffffff";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.82));
          } catch (error) { reject(error); }
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    })));
    const paths = $("#admin-image-url").value.split("\n").map((value) => value.trim()).filter(Boolean);
    $("#admin-image-url").value = paths.concat(converted).join("\n");
    updatePhotoPicker();
    showToast("Đã nén ảnh. Nhấn Lưu để cập nhật.");
  } catch (error) {
    console.error("Image upload failed.", error);
    showToast("Không thể đọc ảnh. Vui lòng thử tệp khác.");
  } finally {
    event.target.value = "";
  }
}

function addAdminItem() {
  const highest = ITEMS.reduce((max, item) => {
    const match = /^tt(\d+)$/.exec(item.id);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 19);
  const slug = `tt${highest + 1}`;
  const newItem = {
    id: slug,
    category: "memory",
    nameVi: "",
    nameEn: "",
    shortVi: "",
    shortEn: "",
    storyVi: "",
    storyEn: "",
    stemVi: "",
    stemEn: "",
    image: "",
    images: []
  };
  selectedItem = newItem;
  renderAdminList();
  loadItemIntoForm(newItem);
  $("#admin-name-vi").focus();
  showToast(`Điền thông tin ${slug}, sau đó nhấn Lưu.`);
}

function removeSelectedAdminItem() {
  if (!selectedItem) return;
  if (!ITEMS.some((item) => item.id === selectedItem.id)) {
    selectedItem = ITEMS[0];
    loadItemIntoForm(selectedItem);
    renderAdminList();
    showToast("Đã bỏ bản nháp chưa lưu.");
    return;
  }
  if (ITEMS.length <= 1) { showToast("Cần giữ lại ít nhất một hiện vật."); return; }
  const updated = ITEMS.filter((item) => item.id !== selectedItem.id);
  if (!persistItems(updated)) return;
  ITEMS = updated;
  selectedItem = ITEMS[0] || null;
  if (selectedItem) {
    loadItemIntoForm(selectedItem);
  }
  renderCollection();
  renderDetail();
  renderPrintSheet();
  renderAdminList();
  showToast("Item removed.");
}

function moveSelectedItem(direction) {
  if (!selectedItem) return;
  const index = ITEMS.findIndex((item) => item.id === selectedItem.id);
  const newIndex = Math.min(ITEMS.length - 1, Math.max(0, index + direction));
  if (newIndex === index) return;
  if (index < 0) return;
  const updated = [...ITEMS];
  const [item] = updated.splice(index, 1);
  updated.splice(newIndex, 0, item);
  if (!persistItems(updated)) return;
  ITEMS = updated;
  selectedItem = item;
  renderCollection();
  renderDetail();
  renderPrintSheet();
  renderAdminList();
}

function exportItems() {
  const payload = JSON.stringify(ITEMS, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "items.json";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("items.json downloaded.");
}

function importItems() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.addEventListener("change", async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed) || !parsed.length || parsed.some((item) => !item || typeof item !== "object" || typeof item.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id) || typeof item.nameVi !== "string" || typeof item.nameEn !== "string" || ["shortVi", "shortEn", "storyVi", "storyEn", "stemVi", "stemEn"].some((key) => item[key] !== undefined && typeof item[key] !== "string") || (item.image !== undefined && typeof item.image !== "string") || (item.images !== undefined && (!Array.isArray(item.images) || item.images.some((image) => typeof image !== "string" || !validImagePath(image)))) || (item.image && !validImagePath(item.image))) || new Set(parsed.map((item) => item.id)).size !== parsed.length) throw new Error("Invalid file format or duplicate IDs");
      const imported = normalizeItems(parsed);
      if (!persistItems(imported)) return;
      ITEMS = imported;
      selectedItem = ITEMS[0];
      renderCollection();
      renderDetail();
      renderPrintSheet();
      renderAdminList();
      loadItemIntoForm(selectedItem);
      showToast("Items imported.");
    } catch (error) {
      console.error(error);
      showToast("Import failed. Use a valid items.json file.");
    }
  });
  input.click();
}

function openGithubModal() {
  $("#admin-modal-backdrop").hidden = false;
}

function closeGithubModal() {
  $("#admin-modal-backdrop").hidden = true;
}

async function publishToGithub() {
  const token = $("#github-token").value.trim();
  const owner = $("#github-owner").value.trim() || "JerryIsHere";
  const repo = $("#github-repo").value.trim() || "STEMEE";
  const branch = $("#github-branch").value.trim() || "main";
  if (!token) {
    showToast("Add a GitHub token to publish.");
    return;
  }

  try {
    const payload = JSON.stringify(ITEMS, null, 2);
    const base64 = btoa(unescape(encodeURIComponent(payload)));
    const headers = {
      "Authorization": `token ${token}`,
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json"
    };
    const endpoint = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/data/items.json`;
    const getResponse = await fetch(`${endpoint}?ref=${encodeURIComponent(branch)}`, { headers });
    if (!getResponse.ok && getResponse.status !== 404) throw new Error(`GitHub read failed: ${getResponse.status}`);
    const existing = getResponse.ok ? await getResponse.json() : null;
    const body = {
      message: "Update exhibition item catalog",
      content: base64,
      branch,
      sha: existing && existing.sha ? existing.sha : undefined
    };
    const response = await fetch(endpoint, {
      method: "PUT",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "GitHub publish failed.");
    }
    closeGithubModal();
    $("#github-token").value = "";
    showToast("Published to GitHub.");
  } catch (error) {
    console.error(error);
    showToast("Unable to publish to GitHub. Check token and repo access.");
  }
}

async function init() {
  await hydrateDefaultItemsFromRemote();
  const requestedId = getUrlParam("id");
  const requestedItem = resolveItem(requestedId);
  const hasValidQuery = Boolean(requestedItem);
  selectedItem = requestedItem || ITEMS[0];
  buildEqualizer();
  buildPhotoPicker();
  setLanguage(language);
  if (hasValidQuery) {
    startIntro();
    $("#artifact-detail").scrollIntoView({ block: "start" });
  }
  if (getUrlParam("admin") === "true") openAdminPanel();

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
  $("#admin-toggle").addEventListener("click", openAdminPanel);
  $("#admin-close").addEventListener("click", closeAdminPanel);
  $("#admin-add").addEventListener("click", addAdminItem);
  $("#admin-delete").addEventListener("click", removeSelectedAdminItem);
  $("#admin-move-up").addEventListener("click", () => moveSelectedItem(-1));
  $("#admin-move-down").addEventListener("click", () => moveSelectedItem(1));
  $("#admin-save-local").addEventListener("click", saveEditedItem);
  $("#admin-export").addEventListener("click", exportItems);
  $("#admin-import").addEventListener("click", importItems);
  $("#admin-image-upload").addEventListener("change", handleImageUpload);
  $("#admin-image-url").addEventListener("input", updatePhotoPicker);
  $("#quick-edit-toggle").addEventListener("change", (event) => {
    quickEdit = event.target.checked;
    renderCollection();
  });
  $("#admin-reset").addEventListener("click", async () => {
    if (!resetPending) {
      resetPending = true;
      $("#admin-reset").textContent = "Nhấn lần nữa để thay bản nháp / Confirm reset";
      return;
    }
    resetPending = false;
    $("#admin-reset").textContent = "Đồng bộ dữ liệu gốc / Reset";
    try {
      let defaults = DEFAULT_ITEMS;
      if (window.location.protocol !== "file:") {
        const response = await fetch("./data/items.json", { cache: "no-store" });
        if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
        defaults = await response.json();
        if (!Array.isArray(defaults) || !defaults.length) throw new Error("Invalid catalog");
      }
      const updated = normalizeItems(defaults);
      if (!persistItems(updated)) return;
      ITEMS = updated;
      selectedItem = ITEMS[0];
      setLanguage(language);
      loadItemIntoForm(selectedItem);
      renderAdminList();
      showToast("Đã đồng bộ dữ liệu gốc.");
    } catch (error) {
      console.error("Catalog sync failed.", error);
      showToast("Không thể đồng bộ. Vui lòng kiểm tra kết nối và dữ liệu.");
    }
  });
  $("#admin-publish").addEventListener("click", openGithubModal);
  $("#modal-close").addEventListener("click", closeGithubModal);
  $("#modal-cancel").addEventListener("click", closeGithubModal);
  $("#modal-publish").addEventListener("click", publishToGithub);
  document.querySelectorAll("[data-lightbox-src]").forEach((button) => button.addEventListener("click", () => openLightbox(button.dataset.lightboxSrc, button.dataset.lightboxVi, button.dataset.lightboxEn, button)));
  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", (event) => { if (event.target === $("#lightbox")) closeLightbox(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !$("#lightbox").hidden) closeLightbox(); });
  loadItemIntoForm(selectedItem);
  renderAdminList();
  window.addEventListener("popstate", () => {
    const id = getUrlParam("id");
    selectItem(resolveItem(id) ? id : ITEMS[0].id);
  });
}

init();
