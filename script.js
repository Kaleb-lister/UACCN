// --- DATABASE SOAL (42 SOAL) ---
const quizQuestions = [
    // Struktur Single Select: { question, options, answer, type: 'single', image: 'filename.png' }
    // Struktur Multi Select: { question, options, answer: [...array of correct answers], type: 'multi' }

    { question: "Berikut ini merupakan algoritma routing yang digunakan dalam RIP adalah.....", options: ["Dijkstra", "Bellman Ford", "Hammiltonian", "Steiner"], answer: "Bellman Ford", type: 'single' },
    { question: "Berikut ini yang merupakan algoritma routing yang digunakan dalam OSPF adalah....", options: ["Steiner", "Hamiltonian", "Bellman Ford", "Dijkstra"], answer: "Dijkstra", type: 'single' },
    { question: "Berikut ini yang merupakan jenis Link State Routing protocol adalah....", options: ["EIGRP", "BGP", "RIP", "OSPF"], answer: "OSPF", type: 'single' },
    { question: "Alat jaringan komputer yang digunakan untuk mencari jalur terbaik dalam menghubungkan antar jaringan komputer disebut......", options: ["Repeater", "Router", "Switch", "Bridge"], answer: "Router", type: 'single' },
    { question: "Berikut ini fungsi ARP adalah....", options: ["digunakan host/device untuk mencari jalur terbaik", "digunakan host/device untuk mencari IP Address berdasarkan MAC yang dituju", "digunakan host/device untuk mencapatkan IP address dari server", "digunakan host/device untuk mencari MAC Address berdasarkan IP address yang dituju"], answer: "digunakan host/device untuk mencari MAC Address berdasarkan IP address yang dituju", type: 'single' },
    { question: "Ping merupakan perintah dalam sistem operasi windows yang dapat digunakan untuk....", options: ["mengecek kondisi koneksi jaringan berdasarkan IP Address device yang dituju", "mengecek kondisi koneksi jaringan berdasarkan MAC Address device yang dituju", "mengirimkan file data secara cepat", "remote/mengendalikan host/device secara CLI"], answer: "mengecek kondisi koneksi jaringan berdasarkan IP Address device yang dituju", type: 'single' },
    
    // Soal Multi-Select 1 (No. 7)
    { question: "Berikut ini karakteristik dari UDP adalah..... (2 yang benar)", options: ["melakukan 3-way-handshake ketika berkomunikasi", "memiliki fitur error correction", "Connectionless", "lebih cepat daripada TCP"], answer: ["Connectionless", "lebih cepat daripada TCP"], type: 'multi' },

    { question: "Berikut ini port yang digunakan untuk HTTP adalah.....", options: ["80", "53", "21", "23"], answer: "80", type: 'single' },
    { question: "Berikut ini port yang digunakan untuk DNS adalah.....", options: ["21", "23", "53", "80"], answer: "53", type: 'single' },

    // Soal Multi-Select 2 (No. 10)
    { question: "Berikut ini karakteristik dari TCP adalah..... (2 yang benar)", options: ["connectionless", "melakukan 3-way-handshake ketika berkomunikasi", "lebih cepat daripada UDP", "connection-oriented"], answer: ["melakukan 3-way-handshake ketika berkomunikasi", "connection-oriented"], type: 'multi' },

    { question: "Fungsi dari protocol DNS adalah:", options: ["mencari jalur terbaik", "mengecek koneksi jaringan", "mengenkripsi komunikasi jaringan", "mentranslasikan hostname/url menjadi IP address"], answer: "mentranslasikan hostname/url menjadi IP address", type: 'single' },
    { question: "SMTP merupakan aplikasi yang digunakan untuk:", options: ["membuka website", "mencari IP Address berdasarkan MAC Address tujuan", "mengirim Email", "mengendalikan host/device dengan CLI"], answer: "mengirim Email", type: 'single' },
    
    // Soal Multi-Select 3 (No. 13)
    { question: "3 tujuan dasar dalam keamanan jaringan adalah.... (3 yang benar)", options: ["confidentiality", "integrity", "connectivity", "authenticity", "availability"], answer: ["confidentiality", "integrity", "availability"], type: 'multi' },

    { question: "Berikut ini salah satu ciri dari asimetric encryption adalah:", options: ["menggunakan sebuah encrypted shared key", "tidak dapat digunakan untuk keperluan autentikasi user", "menggunakan public key dan private key", "menggunakan sebuah shared key"], answer: "menggunakan public key dan private key", type: 'single' },
    
    // Soal Berbasis Gambar Topologi 1 (No. 15)
    { 
        question: "Pada topologi (RA-RB-RC-RD) berapakah jumlah directly connected network dan remote network dari RA?", 
        options: ["5 directly connected network dan 2 remote network", "2 directly connected network dan 5 remote network", "4 directly connected network dan 3 remote network", "3 directly connected network dan 4 remote network"], 
        answer: "4 directly connected network dan 3 remote network", 
        type: 'single',
        image: 'direct-remot.png' 
    },
    // Soal Berbasis Gambar Topologi 1 (No. 16)
    { 
        question: "Berdasarkan topologi (RA-RB-RC-RD), IP yang disarankan menjadi next hop RA untuk tujuan jaringan 192.168.2.0/24 kecuali....", 
        options: ["192.168.5.6", "192.168.5.14", "192.168.5.10", "192.168.5.2"], 
        answer: "192.168.5.14", 
        type: 'single',
        image: 'direct-remot.png' 
    },
    // Soal Berbasis Gambar Topologi 1 (No. 17)
    { 
        question: "Berdasarkan topologi (RA-RB-RC-RD) dan Routing Table, berapa IP nexthop RA untuk pengiriman paket ke host 192.168.2.5?", 
        options: ["192.168.5.14", "192.168.5.10", "192.168.5.2", "192.168.5.6"], 
        answer: "192.168.5.10", 
        type: 'single',
        image: 'routetabel.png' // Menggunakan gambar routing table
    },
    // Soal Berbasis Gambar Topologi 1 (No. 18)
    { 
        question: "Berdasarkan topologi (RA-RB-RC-RD) dan Routing Table, berapa IP nexthop RB untuk pengiriman paket ke host 192.168.2.5?", 
        options: ["192.168.5.2", "192.168.5.10", "192.168.5.6", "192.168.5.14"], 
        answer: "192.168.5.14", 
        type: 'single',
        image: 'routetabel.png' // Menggunakan gambar routing table
    },

    { question: "Berikut merupakan isi dari routing table, kecuali:", options: ["Interface", "Next Hop", "Destination Network Address", "Next Router"], answer: "Next Router", type: 'single' },

    // Soal Berbasis Gambar Topologi 2 (No. 20-23)
    { 
        question: "Pada topologi (R0-R1) berapakah jumlah directly connected network dan remote network dari R0?", 
        options: ["2 directly connected, 2 remote", "1 directly connected, 2 remote", "2 directly connected, 3 remote", "2 directly connected, 1 remote"], 
        answer: "2 directly connected, 1 remote", 
        type: 'single',
        image: 'direct-3jaringan.png' 
    },
    { 
        question: "Berdasarkan topologi (R0-R1), berapakah jumlah directly connected network dan remote network dari R1?", 
        options: ["1 directly connected network dan 2 remote network", "2 directly connected network dan 1 remote network", "2 directly connected network dan 3 remote network", "2 directly connected network dan 2 remote network"], 
        answer: "2 directly connected network dan 1 remote network", 
        type: 'single',
        image: 'direct-3jaringan.png' 
    },
    { 
        question: "Berdasarkan topologi (R0-R1), Next Hop dari Router 0 untuk menuju ke jaringan 192.168.3.0/24 adalah", 
        options: ["192.168.1.1", "192.168.1.2", "192.168.3.2", "192.168.3.1"], 
        answer: "192.168.1.2", 
        type: 'single',
        image: 'direct-3jaringan.png' 
    },
    { 
        question: "Berdasarkan topologi (R0-R1), Next Hop dari Router 1 untuk menuju ke jaringan 192.168.2.0/24 adalah", 
        options: ["192.168.1.2", "192.168.1.1", "192.168.3.1", "192.168.3.2"], 
        answer: "192.168.1.1", 
        type: 'single',
        image: 'direct-3jaringan.png' 
    },

    { question: "Rumus untuk mencari OSPF Metric adalah", options: ["Cost Bandwidth / Interface Bandwidth", "Reference Bandwidth / Cost Bandwidth", "Interface Bandwidth / Reference Bandwidth", "Reference Bandwidth / Interface Bandwidth"], answer: "Reference Bandwidth / Interface Bandwidth", type: 'single' },
    { question: "Dokumentasi OSPF tercantum pada", options: ["RFC 2324", "RFC 2325", "RFC 2327", "RFC 2328"], answer: "RFC 2328", type: 'single' },
    { question: "Berikut merupakan tipe dynamic routing, kecuali", options: ["RIP", "OS-OS", "OSPF", "IS-IS"], answer: "OS-OS", type: 'single' },
    { question: "Berikut ini peran yang dilakukan oleh TCP namun tidak dilakukan oleh UDP adalah:", options: ["Port addressing", "Flow dan error control", "Mengubah Paket menjadi frame", "Mac addressing"], answer: "Flow dan error control", type: 'single' },
    { question: "Berikut ini yang termasuk dalam well-known port adalah:", options: ["80", "65530", "49152", "1024"], answer: "80", type: 'single' },
    { question: "IaaS (Infrastructure as a Service) adalah layanan dalam cloud computing yang:", options: ["Memungkinkan pengguna untuk fokus dalam pengembangan dan manajemen aplikasi", "Menyediakan alat-alat jaringan basic untuk keperluan cloud computing", "Menyediakan pengguna dengan produk lengkap yang dijalankan dan dikelola oleh penyedia cloud", "menyediakan jasa hosting dan domain"], answer: "Menyediakan alat-alat jaringan basic untuk keperluan cloud computing", type: 'single' },
    { question: "Virtual Firewall milik AWS yang digunakan untuk mengontrol inbound dan outbound traffic dan memiliki sifat stateful adalah:", options: ["VPC Flow logs", "AWS antivirus", "Access network list", "Security Group"], answer: "Security Group", type: 'single' },
    { question: "Keuntungan cloud computing yang memungkinkan kita menggunakan sumber daya sesuai kebutuhan dan dapat disesuaikan (ditambah/dikurangi) sesuai kebutuhan pengguna secara otomatis disebut dengan:", options: ["Agility", "Cost saving", "Elasticity", "Deploy globally in minutes"], answer: "Elasticity", type: 'single' },
    { question: "Agent yang bertugas untuk melakukan permintaan DNS kepada DNS Server adalah:", options: ["DNS server", "Resolver", "DNS Cache", "DNS Mapper"], answer: "Resolver", type: 'single' },
    { question: "Berikut ini merupakan isi dari DNS data, kecuali:", options: ["Hostname aliases /CNAME", "Mail Exchangers /MX", "Name server records /NS", "DNS Server Name /SN"], answer: "DNS Server Name /SN", type: 'single' },
    { question: "Berikut ini TLD berdasarkan country code:", options: [".com", ".org", ".ac", ".id"], answer: ".id", type: 'single' },
    { question: "Ekstensi yang digunakan untuk memperluas SMTP sehingga memungkinkan pengiriman data seperti video, file, audio dalam beremail disebut dengan....", options: ["MIME", "MIMO", "HTTPS", "POP3"], answer: "MIME", type: 'single' },
    { question: "Berikut ini contoh email user agent yang digunakan untuk membuat dan mengirim email adalah:", options: ["Word", "Facebook", "Chrome", "Outlook"], answer: "Outlook", type: 'single' },
    { question: "Protokol untuk meminta dokumen web melalui browser dan ter-enkripsi disebut dengan protokol:", options: ["HTTPS", "SSL/TLS", "DNS", "HTTP"], answer: "HTTPS", type: 'single' },
    { question: "Berikut ini pernyataan yang benar terhadap asymmetric encryption adalah:", options: ["Public key dan private key bersifat subtitusi", "Private key dapat dibagikan oleh pengirim ke penerima dengan aman", "Apabila plain text di-enkripsi dengan public key maka chipertextnya hanya bisa di-dekripsi dengan private key", "Public key harus dijaga agar tetap rahasia dari publik"], answer: "Apabila plain text di-enkripsi dengan public key maka chipertextnya hanya bisa di-dekripsi dengan private key", type: 'single' },
    { question: "DDOS adalah salah satu serangan yang berdampak besar pada goal dari network security terutama pada ...", options: ["C. Confidentiality", "B. Authenticity", "A. Availability", "D. Integrity"], answer: "A. Availability", type: 'single' },
    { question: "Berikut ini yang merupakan pasif attack yaitu:", options: ["Eavesdropping", "Altering", "DDOS", "Masquerade"], answer: "Eavesdropping", type: 'single' },
    { question: "Berikut ini peran dari transport layer, kecuali *", options: ["Segmenting", "Port Addressing", "Connection Control", "IP Addressing"], answer: "IP Addressing", type: 'single' },
    { question: "Instance dalam aws yang digunakan sebagai server kosong sehingga pengguna dapat membuat server kustom disebut dengan...", options: ["EBS", "EC2", "VPC", "S3"], answer: "EC2", type: 'single' }
];

// --- LOGIKA KUIS ---
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedAnswers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const feedbackDiv = document.getElementById('feedback');
const resultsDiv = document.getElementById('results');
const quizDiv = document.getElementById('quiz');


// --- Fungsi Pengacakan Fisher-Yates (Digunakan untuk Soal dan Pilihan) ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}


// Fungsi untuk menampilkan soal
function displayQuestion() {
    optionsContainer.innerHTML = '';
    feedbackDiv.textContent = '';
    nextButton.disabled = true;
    answered = false;
    selectedAnswers = [];

    // Hapus gambar lama 
    const existingImg = optionsContainer.parentNode.querySelector('#question-image');
    if(existingImg) {
        existingImg.remove();
    }

    if (currentQuestionIndex < quizQuestions.length) {
        const currentQ = quizQuestions[currentQuestionIndex];
        
        // **!!! MODIFIKASI: Acak Pilihan Jawaban !!!**
        shuffleArray(currentQ.options);
        
        // 1. Tampilkan Teks Pertanyaan
        questionText.innerHTML = `Soal ${currentQuestionIndex + 1} / ${quizQuestions.length}: ${currentQ.question}`;
        
        // 2. Tambahkan Gambar jika properti 'image' ada
        if (currentQ.image) {
            const img = document.createElement('img');
            img.src = currentQ.image; // Path file gambar
            img.alt = 'Diagram Topologi Jaringan';
            img.id = 'question-image';
            img.style.maxWidth = '100%'; 
            img.style.height = 'auto';
            img.style.marginTop = '15px';
            img.style.border = '1px solid #ccc';
            img.style.borderRadius = '5px';
            
            questionText.parentNode.insertBefore(img, optionsContainer); 
        }

        // 3. Tampilkan Pilihan Jawaban
        if (currentQ.type === 'single') {
            currentQ.options.forEach(optionText => {
                const button = document.createElement('button');
                button.textContent = optionText;
                button.classList.add('option-button');
                button.addEventListener('click', () => selectSingleAnswer(button, optionText, currentQ.answer));
                optionsContainer.appendChild(button);
            });
        } else if (currentQ.type === 'multi') {
            currentQ.options.forEach(optionText => {
                const label = document.createElement('label');
                label.classList.add('checkbox-label');
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'multi-option';
                checkbox.value = optionText;
                checkbox.addEventListener('change', updateMultiSelect);
                
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(optionText));
                optionsContainer.appendChild(label);
            });
        }

    } else {
        showResults();
    }
}

// Update state for Multi-Select (checkboxes)
function updateMultiSelect() {
    const checkboxes = document.querySelectorAll('input[name="multi-option"]:checked');
    nextButton.disabled = checkboxes.length === 0 && !answered;
}

// Handle Single-Select answer
function selectSingleAnswer(button, selectedText, correctAnswer) {
    if (answered) return;

    answered = true;
    nextButton.disabled = false;

    document.querySelectorAll('.option-button').forEach(btn => btn.disabled = true);

    if (selectedText === correctAnswer) {
        score++;
        feedbackDiv.textContent = "✅ Benar!";
        button.classList.add('correct');
    } else {
        feedbackDiv.textContent = `❌ Salah. Jawaban benar: ${correctAnswer}`;
        button.classList.add('incorrect');
        
        document.querySelectorAll('.option-button').forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
}

// Handle Multi-Select submission
function checkMultiAnswer(currentQ) {
    const checkboxes = document.querySelectorAll('input[name="multi-option"]');
    selectedAnswers = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
    
    // Logika Pengecekan Multi-Select
    const correctArray = currentQ.answer;
    const isCorrect = selectedAnswers.length === correctArray.length && 
                      selectedAnswers.every(ans => correctArray.includes(ans));

    // Berikan feedback dan nonaktifkan pilihan
    checkboxes.forEach(cb => cb.disabled = true);

    if (isCorrect) {
        score++;
        feedbackDiv.textContent = "✅ Benar! (Semua jawaban tepat)";
    } else {
        feedbackDiv.textContent = `❌ Salah. Jawaban benar: ${correctArray.join('; ')}`;
    }
    
    // Warnai pilihan untuk feedback visual
    checkboxes.forEach(cb => {
        const label = cb.parentElement;
        if (correctArray.includes(cb.value)) {
            label.classList.add('correct');
        } else if (cb.checked && !correctArray.includes(cb.value)) {
            label.classList.add('incorrect'); // Pilihan salah yang dicentang
        }
    });

    answered = true;
    nextButton.disabled = false;
}


// Fungsi untuk melanjutkan ke soal berikutnya
function nextQuestion() {
    const currentQ = quizQuestions[currentQuestionIndex];
    
    // Jika soal Multi-Select, cek jawaban terlebih dahulu pada klik pertama
    if (currentQ.type === 'multi' && !answered) {
        if (document.querySelectorAll('input[name="multi-option"]:checked').length > 0) {
             checkMultiAnswer(currentQ);
        }
        return; 
    }

    if (answered) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Fungsi untuk menampilkan hasil
function showResults() {
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
    
    const percentage = ((score / quizQuestions.length) * 100).toFixed(2);
    
    resultsDiv.innerHTML = `
        <h2>Kuis Selesai! 🎉</h2>
        <p>Anda berhasil menjawab ${score} dari ${quizQuestions.length} soal.</p>
        <p>Persentase Skor: <b>${percentage}%</b></p>
        <button onclick="location.reload()">Mulai Ulang Kuis</button>
    `;
}

// Event listener untuk tombol Lanjutkan
nextButton.addEventListener('click', nextQuestion);

// Inisialisasi kuis: Acak SOAL dan Mulai
document.addEventListener('DOMContentLoaded', () => {
    shuffleArray(quizQuestions); 
    displayQuestion(); 
});