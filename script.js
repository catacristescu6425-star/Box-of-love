const messages = [
    { 
        title: "Data noastră: 13.01.2027", 
        date: "2027-01-13", 
        text: "Mesaj pentru 13 ianuarie...", 
        img: "" 
    },
    { 
        title: "O lună: 13.02.2026 ❤️", 
        date: "2026-02-13", 
        text: `1 lună de noi. ❤️🥰
            Cine ar fi crezut că o zi de marți 13 va deveni data mea preferată din calendar? Îmi amintesc și acum emoțiile pe care le aveam când m-ai sunat și am ieșit în fața facultății; tremuram toată și chiar nu știam ce să fac când m-ai luat în brațe și mi-ai zis că sunt micuță față de tine. 🫣☺️
            Iar mai apoi, momentul în care m-ai luat de mână în timp ce ne plimbam a schimbat totul pentru mine... atunci am simțit niște fluturi în stomac și am știut că pot să las garda jos și că sunt în siguranță lângă tine. Iar sărutul? M-a luat atât de tare prin surprindere, încât pentru câteva secunde nici nu mai știam ce mi-ai zis (te-am și întrebat a doua zi ce ai spus), eram pur și simplu pierdută în moment și nu știam ce se întâmplă. 🥰❤️
            De atunci, ai reușit să fii un dulce și un drăguț în fiecare zi, demonstrându-mi că distanța e doar un număr dacă știi cum să fii prezent în viața cuiva. Sunt tare mândră că sunt a ta și abia aștept să mai adunăm luni și amintiri la fel de frumoase împreună. Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "heart.jpg" 
    },
    { 
        title: "V-Day: 14.02.2026", 
        date: "2026-02-14", 
        text: `Happy Valentine’s Day, scumpul meu! ❤️
            După mult timp, ziua de 14 februarie are în sfârșit un sens pentru mine, pentru că o petrec cu cineva special. Chiar dacă nu știu unde ne poartă drumurile astăzi, te simt mai aproape decât orice prin grija pe care mi-o porți în fiecare zi și, uitându-mă înapoi, sunt recunoscătoare pentru felul în care ai intrat în viața mea. 🤗🥰
            Mă faci să mă simt atât de bine și îmi porți de grijă mereu, demonstrându-mi că distanța nu e un impediment pentru cineva care vrea cu adevărat să fie prezent. Indiferent dacă azi reușești să mă surprinzi și să ne vedem sau dacă rămânem să ne bibilim prin mesaje, tu ești cel care face ca această zi să fie specială.
            Ai apărut întâmplător, în momentul în care nu mai căutam nimic, și ai reușit să-mi „pui capac” într-o clipă. 🥰😂 Acum îți dau teroare cu toate prostiile mele, dar sper că asta să nu fie o problemă prea mare.
            Sper să avem o zi superbă, indiferent de kilometrii care sunt între noi! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "kiss.jpg" 
    },
    { 
        title: "My B-day: 15.02.2026", 
        date: "2026-02-15", 
        text: `La mulți ani mie! 🎂✨
            Azi împlinesc 22 de ani și, uitându-mă înapoi, realizez cât de mult s-au schimbat lucrurile. Am crescut, m-am maturizat și uite că imediat termin și facultatea... însă nu despre asta este vorba și nu asta vreau să-ți scriu aici.
            Ultima dată când am simțit că aparțin cuiva aveam doar 17 ani și totul era doar o joacă de copii de liceu. De atunci, am trecut prin multe, dar un lucru a fost constant: acea rugăciune pe care o rosteam sperând că va veni cineva care să fie lângă mine, să mă sprijine și să mă vadă cu adevărat. 🫣🥹 Am încercat de mai multe ori să găsesc persoana potrivită, însă fără vreun rezultat.
            Iar acum, la 22 de ani, ești aici. Deși suntem la distanță, mă faci să mă simt mai iubită și mai protejată decât orice proximitate fizică ar putea-o face. Nu mai e o joacă de copii; e despre liniștea pe care mi-o dai când îmi scrii și despre faptul că, după atâta timp, pot spune din nou, cu toată maturitatea și sufletul, că sunt a ta.
            De ziua mea, tu ești cel mai frumos cadou pe care îl puteam primi și singurul răspuns de care aveam nevoie. Îți mulțumesc că ești al meu și sper ca asta să nu se schimbe vreodată! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "",
        confetti: true 
    },
    { 
        title: "Happy Birthday 🥳✨: 17.02.2026", 
        date: "2026-02-17", 
        text: `La mulți ani, scumpul meu! 🥳✨
            Azi e despre tine și despre cât de special ești. Mă bucur enorm că pot fi lângă tine, chiar dacă ne despart atâția kilometri. Deși suntem departe, vreau să simți că ai în mine un sprijin necondiționat; o să fiu mereu aici să te încurajez, să te ascult și să te susțin în absolut tot ce vei vrea să faci. 🤗🥰
            Ai apărut în viața mea ca răspuns la rugăciunile mele de a găsi un om asumat și protector, iar acum, de ziua ta, singura mea dorință este să fii fericit și să știi cât de mult însemni pentru mine. Sunt mândră că sunt a ta și mă bucur că pot să-ți fiu alături în acest nou capitol din viața ta.
            Să ai o zi minunată așa ca tine, scumpul meu, și să nu uiți că 'teroarea' ta e la un mesaj distanță, gata să te alinte și să te facă să zâmbești ori de câte ori ai nevoie! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "happy.jpg",
        confetti: true 
    },
    { 
        title: "Dragobete: 24.02.2026", 
        date: "2026-02-24", 
        text: `La mulți ani de Dragobete, scumpule! ❤️
            Chiar dacă tradiția spune că azi Dragobetele sărută fetele, noi am furat startul acum o lună, așa că azi vreau doar să-ți mulțumesc pentru felul în care mă faci să mă simt. Indiferent de ce facem astăzi, vreau să știi că grija pe care mi-o porți mereu e cel mai frumos cadou pentru mine. 🥰☺️
            Deși suntem la distanță, reușești de fiecare dată să-mi alungi orice stare proastă și să mă faci să zâmbesc doar prin simplul fapt că ești acolo pentru mine și îmi trimiți câte un mesaj. Te-am cerut în rugăciune ca pe cineva asumat, care să-mi ofere siguranță, iar acum că sunt a ta, simt că am găsit exact acel echilibru de care aveam nevoie.
            Să avem o zi plină de liniște, fix așa cum e legătura noastră! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "" 
    },
    { 
        title: "Mărțișor", 
        date: "2026-03-01", 
        text: `La mulți ani de 1 Martie, scumpul meu! ❤️🤍
            M-am gândit mult cum să îți ofer un mărțișor la început de primăvară, având în vedere că suntem la distanță. Știu că în alte zone ale țării băieții oferă mărțișoare fetelor, însă aici în Bucovina, la Suceava, fetele sunt cele care dăruiesc mărțișorul. Așa că primește-l pe acesta, chiar dacă e doar virtual, ca pe o bucățică din sufletul meu. 🥰❤️
            Deși ne despart ceva kilometri, grija pe care mi-o porți zi de zi îmi dă o stare de bine pe care nu am crezut că o pot simți prin mesaje. Mă faci să zâmbesc la telefon ca o nebună și să simt acel gol în stomac de care mi-era dor, amintindu-mi că merită să aștept oricât pentru momentele noastre.
            Sper să ai o primăvară superbă, la fel ca tine, dragule! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "martisor.jpg" 
    },
    { 
        title: "Îți e dor de mine ❤️", 
        date: null, 
        text: `Dragul meu, dacă ai deschis scrisoarea asta, probabil e unul din momentele în care distanța dintre noi se simte puțin mai grea... 🙈 Vreau să închizi ochii pentru o secundă și să îți imaginezi că, deși nu sunt fizic acolo, inima mea e deja la tine. 🥰❤️ 
            Nu ai idee ce bucurie simt de fiecare dată când deschid telefonul și văd în notificări că am un mesaj de la tine. Indiferent cât de lungă sau de obositoare mi-a fost ziua la facultate, reușești să-mi pui pe față un zâmbet imens doar prin faptul că ești acolo. Mă faci să mă simt atât de liniștită și de protejată prin gesturi simple, prin mesaje care îmi arată că îți pasă și că îmi porți de grijă, chiar și de la kilometri depărtare. 🫣☺️
            Tu ai fost dorința din rugăciunile pe care le rosteam sperând să găsesc un om asumat, care să mă facă să mă simt în siguranță și să simt că aparțin cuiva. Iar acum că te-am găsit, sunt atât de mândră să spun că sunt a ta. Țin enorm de mult la tine, chiar dacă a trecut puțin timp, și vreau să știi că, indiferent de ce ai nevoie sau prin ce treci, îți sunt alături cu tot sufletul. 🥰😘
            Cred cu tărie că dacă Dumnezeu a vrut ca noi să fim la distanță în perioada asta, a făcut-o pentru că are un plan. Poate că așa avem ocazia să învățăm să ne prețuim cu adevărat cuvintele și unul pe celălalt, să ne arătăm cât de mult contăm unul pentru altul și să ne demonstrăm că o legătură reală nu are nevoie de proximitate ca să crească. Distanța e doar modul nostru de a arăta cât de mult ținem unul la altul. 🥰🥰
            Îți trimit o îmbrățișare imensă și abia aștept să ne vedem iar! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "dor.mp4" 
    },
    { 
        title: "Ai o zi grea și eu nu știu cum să te ajut 🤍", 
        date: null, 
        text: `Scumpul meu ❤️, dacă ai deschis scrisoarea asta, probabil că treci printr-un moment în care totul pare greu și poate eu, de la distanță, nu găsesc cuvintele potrivite sau simt că nu știu ce să fac ca să îți fie mai bine. 😔🥺
            Vreau să știi că e în regulă să ai și zile în care totul pare greu, poate chiar imposibil. Chiar dacă nu sunt fizic lângă tine să te iau în brațe și să las tăcerea să rezolve totul, sunt aici cu tot sufletul. Te-am ales pentru că ești un om asumat și puternic, dar mai ales pentru că ești omul care mi-a oferit mie liniște; așa că acum e rândul meu să fiu eu liniștea ta. 🫣🥹
            Nu te stresa să îmi răspunzi dacă te simți copleșit sau să te prefaci că ești bine dacă nu ești, pentru că îmi dau seama chiar și prin mesaje. Odihnește-te, respiră și amintește-ți că undeva e o fată care are o încredere imensă în tine, te susține enorm și te consideră cel mai mare noroc al ei.
            Sunt a ta, sunt mândră de tine și te aștept aici cu brațele deschise (virtual, pentru moment) oricând simți că vrei să te descarci. Te sărut, te îmbrățișez și sunt lângă tine, indiferent de cât de grea e ziua de azi! Te sărut și te îmbrățișez chiar și de la distanță. 🥰💋`, 
        img: "hug.jpg" 
    },
    { 
        title: "Te simți singur 🤍", 
        date: null, 
        text: `Scumpul meu, dacă ai deschis scrisoarea asta, probabil că distanța se simte mai grea ca de obicei și liniștea din jurul tău a devenit apăsătoare. Vreau să închizi ochii pentru o secundă, să respiri adânc și să mă asculți. 🫣
            Chiar dacă în telefon încă nu avem acele poze împreună pe care abia aștept să le facem, vreau să știi că în inima mea e plin de noi. Te văd clar de fiecare dată când închid ochii: îți văd zâmbetul, îți simt privirea aia luminoasă și îmi amintesc perfect cum m-am simțit în brațele tale. Nu ești singur nicio secundă. ✨❤️
            Undeva, e cineva care te poartă în fiecare gând, care se roagă pentru tine și care abia așteaptă să-ți dea din nou „teroare” în realitate. Tu ești liniștea de care aveam nevoie și sper că e reciproc, iar faptul că acum nu suntem fizic unul lângă altul e doar o etapă.
            Sunt a ta și sunt aici, la un mesaj distanță, gata să te ascult sau pur și simplu să tac lângă tine până trece norul ăsta. Te îmbrățișez strâns de tot, îți trimit un sărut și sunt aici mereu! 🥰💋`, 
        img: "sad.jpg" 
    },
    { 
        title: "Ai nevoie de o doză de 'teroare' 😈🧸🦖", 
        date: null, 
        text: `Hopa! Cineva a avut curajul să deschidă plicul ăsta? 😂 Sper că ești pregătit, pentru că tocmai ai dat de teroarea ta preferată! Dar, totuși, să știi că sunt la doar un mesaj distanță.
            Înainte să pleci să-mi dai mesaj, să știi că nu am uitat cum încerci tu să mă intimidezi cu „Rawr”-ul tău de dinozaur în vocale, imediat ce îți trimit videoclipuri cu ei. 🦖 Te crezi fioros, asumatule? Să știi că ursulețul ăla care scoate limba (cel cu care ai zis că „te ameninț”) e doar începutul! 🧸😛 Consideră-l un avertisment: data viitoare când ne vedem, o să ai parte de mult mai multă teroare la pachet cu toate alintele mele. 😁🫣
            Dacă ai crezut că scapi ușor, te-ai înșelat! Sunt aici să te tachinez, să te fierb și să te fac să zâmbești chiar și când ești cel mai serios. Așa că, amintește-ți că ai în față o teroare care nu se lasă până nu-ți pune capac de tot! 😜😁
            Te sărut și te îmbrățișez chiar și de la distanță (ca să ai motive să te plângi) și abia aștept să te văd, ca să te ameninț și în realitate nu doar prin mesaje! 🥰💋`, 
        img: "" 
    },
    { 
        title: "După ce ne-am despărțit și ți-e dor deja 🥺✨", 
        date: null, 
        text: `Scumpul meu, dacă ai deschis scrisoarea asta, probabil că nici nu s-a răcit bine locul unde am stat împreună și deja simți cum distanța începe să apese din nou... Să știi că nu ești singur, pentru că exact asta simt și eu. 🫣😔
            Încă îți simt parfumul și parcă mai simt și acum îmbrățișarea ta. A fost atât de frumos să te am lângă mine, să te pot privi în ochi și să mă ridic pe vârfuri ca să te ajung. 🫣🥰 Mi-e dor deja de liniștea pe care mi-o dai când mă ții în brațe și de felul în care mă faci să mă simt cea mai protejată fată din lume.
            Deși acum ne despart iar kilometrii, vreau să rămâi cu amintirea zâmbetului meu și cu siguranța că sunt a ta, cu tot sufletul. Ai apărut când mă așteptam cel mai puțin ca un om asumat și bun, iar momentele petrecute cu tine îmi confirmă de fiecare dată că ești tot ce aveam nevoie. ✨🙏
            Nu fi trist, dragule. Timpul trece repede și fiecare secundă ne apropie de următoarea dată când o să-ți „pun capac” din nou cu teroarea mea. 😁😅 Până atunci, închide ochii și imaginează-ți că sunt tot acolo, cu capul pe umărul tău. Te sărut tare de tot și abia aștept să ne facem noi amintiri! 🥰💋`, 
        img: "" 
    },
    { 
        title: "Când suntem supărați unul pe altul 🥺", 
        date: null, 
        text: `Dacă ai deschis scrisoarea asta, probabil că acum e un moment tensionat între noi și poate niciunul dintre noi nu știe exact cum să facă primul pas. Vreau să știi că, deși suntem supărați, nimic nu schimbă ceea ce simt pentru tine. 🥺❤️
            Uneori distanța face ca micile neînțelegeri să pară mai mari, dar vreau să știi că ești liniștea mea și siguranța mea, iar faptul că acum suntem la distanță și supărați poate din ceva prostesc mă face să-mi dau seama cât de mult îmi lipsește zâmbetul tău și felul în care mă faci să mă simt protejată. 🫣🥹
            Nu vreau ca mândria sau kilometrii dintre noi să fie mai puternici decât ceea ce am construit. Sunt a ta și sunt în echipa ta, chiar și atunci când nu suntem de acord. Te-am ales pentru că ești asumat și bun, așa că hai să nu lăsăm o zi proastă să ne fure liniștea.
            Mi-e dor de noi, mi-e dor de 'teroarea' ta preferată și abia aștept să trecem peste momentul ăsta. Te rog, când ești pregătit, dă-mi un semn. Te sărut și te îmbrățișez chiar și de la distanță și îmi pare rău că s-a ajuns aici. 🥰💋`, 
        img: "" 
    }
];

function init() {
    const calendarGrid = document.getElementById('calendar-grid');
    const anytimeGrid = document.getElementById('anytime-grid');
    
    // Obținem data de azi fără ore, minute, secunde
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    messages.forEach(m => {
        const wrapper = document.createElement('div');
        wrapper.className = 'envelope-wrapper';
        
        let isLocked = false;
        let diffDays = 0;

        if (m.date) {
            // Despărțim string-ul "YYYY-MM-DD" manual pentru a evita interpretarea UTC
            const parts = m.date.split('-');
            const unlockDate = new Date(parts[0], parts[1] - 1, parts[2]).getTime();

            if (today < unlockDate) {
                isLocked = true;
                wrapper.classList.add('locked');
                // Calculăm diferența de zile
                diffDays = Math.ceil((unlockDate - today) / (1000 * 60 * 60 * 24));
            }
        }

        wrapper.innerHTML = `
            <div class="flap"></div>
            <div class="letter">${isLocked ? '🔒' : '💌'}</div>
            <div class="envelope-front"></div>
            <div class="title-tag">${m.title}<br>${isLocked ? `(${diffDays} zile)` : ''}</div>
        `;

        wrapper.onclick = function() {
            if (isLocked) {
                showModal("Mai trebuie să aștepți puțin...", `Plicul se va deschide peste ${diffDays} zile.`, null);
            } else {
                this.classList.add('open');
                if (m.confetti && typeof confetti === "function") {
                    launchConfetti();
                }
                setTimeout(() => {
                    showModal(m.title, m.text, m.img);
                    this.classList.remove('open');
                }, 1000);
            }
        };

        if (m.date) calendarGrid.appendChild(wrapper);
        else anytimeGrid.appendChild(wrapper);
    });
}

function showModal(title, text, img) {
    const modal = document.getElementById('message-modal');
    const body = document.getElementById('modal-body');
    
    let content = `<h2>${title}</h2><p style="white-space: pre-line; margin-bottom: 20px;">${text}</p>`;
    
    if (img && img.toLowerCase().endsWith('.mp4')) {
        content += `
            <div style="width: 100%; display: flex; justify-content: center;">
                <video id="main-video" width="90%" style="max-height: 55vh; border-radius: 15px; border: 2px solid #b30000;" controls autoplay muted playsinline>
                    <source src="${img}" type="video/mp4">
                </video>
            </div>`;
    } else if (img) {
        content += `<img src="${img}" style="max-width: 90%; max-height: 55vh; border: 2px solid #b30000; border-radius: 15px;">`;
    }
    
    body.innerHTML = content;
    modal.style.display = "block";

    modal.scrollTop = 0;
}

function closeModal() {
    const modal = document.getElementById('message-modal');
    const video = document.getElementById('main-video');
    if (video) { video.pause(); video.src = ""; video.load(); }
    modal.style.display = "none";
}

document.querySelector('.close').onclick = closeModal;
window.onclick = (e) => { if (e.target.id === 'message-modal') closeModal(); };

function launchConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ff0000', '#d4436a', '#ffffff'] });
}

init();
