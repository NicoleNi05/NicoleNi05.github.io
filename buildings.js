//buildings info
const buildings = [
    { 
        markerNum: '1', 
        name: "Reid Hall/Armour House",
        aliases: ["Reid Hall", "reid", "Reid", "Armour House", "armour house", "Armour house"],
        coords: [1379, 364], 
        info: `
        <div class='popup-title'>Reid Hall/Armour House</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>It’s where the English classrooms are located.</li>
                <li>It’s where the Library is located. The library provides a quiet study area, added over
                130,000 e-books which creates more space for student use, and a Library Classroom
                (Poetry Room) students use this space to do homework or study during free periods.</li>
                <li>It’s where the Little Theater is located. The Little Theater has a new drop-down screen
                used for events and is used as a group study area.</li> 
                <li>It’s home of Jonathan Ogden Armour (1863-1927) with wife Lolita and daughter Lolita</li>
                <li>It was built in 1908 – families lived here for 18 years.</li>
                <li>LFA moved here in 1947 when the school’s building at Lake Forest College had a fire.
            </div>
            <div class="image-container">
                <img src='map/description images/1.svg' class='popup-image' alt='Building 1'></li> 
                <div class="image-overlay"></div>
            </div>    
        </div>
        `
    },
    { 
        markerNum: '2', 
        name: "Formal Gardens & Pagoda",
        aliases: ["Formal Garden", "Formal Gardens", "formal garden", "formal gardnens", "Formal garden", "Formal gardens", "Pagoda", "Pagoda pond", "pagoda", "pagoda pond"],
        coords: [1505, 312], 
        info: `
        <div class='popup-title'>Formal Gardens & Pagoda</div>
        <div class='popup-body'>
            <div class='popup-details'>Formal Gardens & Pagoda.</div>
            <div class="image-container">
                <img src='map/description images/2.svg' class='popup-image' alt='Building 2'>
                <div class="image-overlay"></div>
            </div>  
        </div>
        `
    },
    { 
        markerNum: '3', 
        name: "Admissions & Guest Parking",
        aliases:["Parking lot", "Parking", "parking lot", "parking"],
        coords: [1319, 293], 
        info: `
        <div class='popup-title'>Admissions & Guest Parking</div>
        <div class='popup-body'>
            <div class='popup-details'>Admissions & Guest Parking.</div>
            <div class="image-container">
                <img src='map/description images/3.svg' class='popup-image' alt='Building 3'>
                <div class="image-overlay"></div>
            </div>  
        </div>
        `
    },
    { 
        markerNum: '4', 
        name: "Wood House",
        aliases:["wood house", "Wood house", "Wood house drive", "Wood House Drive"],
        coords: [1383, 187], 
        info: `
        <div class='popup-title'>Wood House</div>
        <div class='popup-body'>
            <div class='popup-details'>Wood House.</div>
            <div class="image-container">
                <img src='map/description images/4.svg' class='popup-image' alt='Building 4'>
                <div class="image-overlay"></div>
            </div>  
        </div>
        ` 
    },
    { 
        markerNum: '5', 
        name: "The Bowditch Bell",
        aliases:["The Bell", "the bell", "The bell", "Bell", "bell"],
        coords: [1300, 356], 
        info: `
        <div class='popup-title'>The Bowditch Bell</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>Each time an LFA sports team wins an away game, the team rings the bell</li>
            </div>
            <div class="image-container">
                <img src='map/description images/5.svg' class='popup-image' alt='Building 5'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '6', 
        name: "Korhumel Wing",
        aliases:["Korhumel", "korhumel", "Korhumel wing"],
        coords: [1280, 380], 
        info: `
        <div class='popup-title'>Korhumel Wing</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>The “Bridge” connects Corbin and Korhumel. It has the House Cup Competition and
                Athletics Brag Board. It’s also where the college counseling office is located. </li>
                <li>Upstairs Korhumel is the History Department. </li>
                <li>Downstairs Korhumel is for seminar classes and additional meeting space</li>
            </div>
            <div class="image-container">
                <img src='map/description images/6.svg' class='popup-image' alt='Building 6'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '7', 
        name: "Corbin Academic Center",
        aliases:["Corbin", "corbin"],
        coords: [1289, 449], 
        info: `
        <div class='popup-title'>Corbin Academic Center</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>It’s at the ramp, there are bulletin board with announcements, service opportunities, etc.</li>
                <li>There are tall tables and chairs and whiteboards inside and outside of the classrooms for
                collaborative learning and reviewing material in groups or meeting with teachers</li>
                <li>The upper Corbin Wing is the Foreign Language Wing (French, Latin, Spanish,
                    Mandarin Chinese).</li>
                <li>The Dean of Students (DOS) Office is where students go to sign in/out and for all
                student-related questions</li>
                <li>It’s where the ESL Classroom is located. </li>
                <li>The lower Corbin Wing is the Mathematics department. </li>
                <li>Classroom chairs in Corbin are all the colors of the school and ferry hall colors and can
                be configured in different ways for best learning practices. </li>
                <li>There are pods and conference rooms for working quietly alone or with others or meeting
                with teachers</li>
                <li>It’s where the Media Commons is located, which offers space for video, web design,
                computer programming, and sound recording studio and 3D printer</li>
            </div>
            <div class="image-container">
                <img src='map/description images/7.svg' class='popup-image' alt='Building 7'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '8', 
        name: "The Cressey Center for the Arts",
        aliases:["Cressey", "cressey", "auditorium", "Auditorium"],
        coords: [1326, 521], 
        info: `
        <div class='popup-title'>The Cressey Center for the Arts</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>Theater, Visual Art, Choir, and Orchestra activities are all carried out in Cressey Center
                for the Arts</li>
                <li>Morning meetings, Fall Play, and Winter Musicals are held in Cressy, too.</li> 
            </div>
            <div class="image-container">
                <img src='map/description images/8.svg' class='popup-image' alt='Building 8'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '9', 
        name: "The Reyes Family Science Center",
        aliases:["Science Center", "Science center", "science center"],
        coords: [1350, 609], 
        info: `
        <div class='popup-title'>The Reyes Family Science Center</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>The Reyes Family Science Center contains 7 classrooms/labs for LFA science
                curriculums.</li>
                <li>The basement of the Reyes Family Science Center is a maker’s space containing high-
                level technology, 3D printers, woodworking, a computer lab, and an art shop. It is used
                for both LFA curriculums and clubs for creative projects.</li>
            </div>
            <div class="image-container">
                <img src='map/description images/9.svg' class='popup-image' alt='Building 9'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '10', 
        name: "Atlass Hall",
        aliases:["Atlass", "atlass", "atlass dorm", "Atlass dorm", "worst dorm ever"],
        coords: [1365, 732], 
        info: `
        <div class='popup-title'>Atlass Hall</div>
        <div class='popup-body'>
            <div class='popup-details'>Boys' dorm.</div>
            
            <div class="image-container">
                <img src='map/description images/10.svg' class='popup-image' alt='Building 10'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '11', 
        name: "New Hall",
        aliases:["New hall", "new hall"],
        coords: [1390, 533], 
        info: `
        <div class='popup-title'>New Hall</div>
        <div class='popup-body'>
            <div class='popup-details'>New Hall.</div>
            <div class="image-container">
                <img src='map/description images/11.svg' class='popup-image' alt='Building 11'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '12', 
        name: "Community Health Center",
        aliases:["Health Center", "Health center", "health center"],
        coords: [1439, 507], 
        info: `
        <div class='popup-title'>Community Health Center</div>
        <div class='popup-body'>
            <div class='popup-details'>Community Health Center.</div>
            
            <div class="image-container">
                <img src='map/description images/12.svg' class='popup-image' alt='Building 12'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '13', 
        name: "JC Cowart Student Center",
        aliases:["Student Center", "student center", "STU", "stu"],
        coords: [1420, 617], 
        info: `
        <div class='popup-title'>JC Cowart Student Center</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>The first floor of the Student Union serves both as a cafeteria and a Student Center.</li>
                <li>During the day, the Sonia’s Snack Bar opens when the cafeteria is not.</li>
                <li>Both boarding and day students can eat three meals a day, their visitors are welcome too.</li>
                <li>Downstairs in the cafeteria is our Campus Store, Mail Room, Stuart Center for Global
                Youth Leadership Institute (GYLI), Business Office, Student Bank, ID, and Security
                Office.</li>
            </div>
            <div class="image-container">
                <img src='map/description images/13.svg' class='popup-image' alt='Building 13'>
                <div class="image-overlay"></div>
            </div> 
            
        </div>
        `
    },
    { 
        markerNum: '14', 
        name: "Silver Family Green",
        aliases:["silver family green", "Silver family green"],
        coords: [1417, 784], 
        info: `
        <div class='popup-title'>Silver Family Green</div>
        <div class='popup-body'>
            <div class='popup-details'>Silver Family Green.</div>
            <div class="image-container">
                <img src='map/description images/14.svg' class='popup-image' alt='Building 14'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '15', 
        name: "Marshall Field House",
        aliases:["Marshall Field", "Marshall field", "marshall field", "Field", "field", "Field Dorm", "Field dorm", "field dorm"],
        coords: [1510, 552], 
        info: `
        <div class='popup-title'>Marshall Field House</div>
        <div class='popup-body'>
            <div class='popup-details'>Girls' dorm.</div>
            <div class="image-container">
                <img src='map/description images/15.svg' class='popup-image' alt='Building 15'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '16', 
        name: "Durand Cottage",
        aliases:["durand cottage", "Durand cottage"],
        coords: [1480, 682], 
        info: `
        <div class='popup-title'>Durand Cottage</div>
        <div class='popup-body'>
            <div class='popup-details'>Durand Cottage.</div>
            <div class="image-container">
                <img src='map/description images/16.svg' class='popup-image' alt='Building 16'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '17', 
        name: "Ferry Hall",
        aliases:["Ferry", "ferry", "ferry hall", "Ferry hall", "Ferry Dorm", "Ferry dorm", "ferry dorm", "best dorm ever"],
        coords: [1490, 754], 
        info: `
        <div class='popup-title'>Ferry Hall</div>
        <div class='popup-body'>
            <div class='popup-details'>Girls' dorm.</div>
            <div class="image-container">
                <img src='map/description images/17.svg' class='popup-image' alt='Building 17'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '18', 
        name: "West Village",
        aliases:["west village", "West village"],
        coords: [1578, 712], 
        info: `
        <div class='popup-title'>West Village</div>
        <div class='popup-body'>
            <div class='popup-details'>West Village.</div>
            <div class="image-container">
                <img src='map/description images/18.svg' class='popup-image' alt='Building 18'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '19', 
        name: "Weinbrenner House",
        aliases:["Weinbrenner house", "weinbrenner house"],
        coords: [1540, 823], 
        info: `
        <div class='popup-title'>Weinbrenner House</div>
        <div class='popup-body'>
            <div class='popup-details'>Weinbrenner House.</div>
            <div class="image-container">
                <img src='map/description images/19.svg' class='popup-image' alt='Building 19'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '20', 
        name: "McIntosh Cottage",
        aliases:["McIntosh cottage", "McIntosh", "mcIntosh cottage", "MAC","mac"],
        coords: [1510, 860], 
        info: `
        <div class='popup-title'>McIntosh Cottage</div>
        <div class='popup-body'>
            <div class='popup-details'>Girls' dorm.</div>
            <div class="image-container">
                <img src='map/description images/20.svg' class='popup-image' alt='Building 20'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '21', 
        name: "Richards Cottage",
        aliases:["richards cottage", "Richards cottage"],
        coords: [1520, 907], 
        info: `
        <div class='popup-title'>Richards Cottage</div>
        <div class='popup-body'>
            <div class='popup-details'>Richards Cottage.</div>
            <div class="image-container">
                <img src='map/description images/21.svg' class='popup-image' alt='Building 21'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '22', 
        name: "Facilities",
        aliases:["facilities"],
        coords: [1580, 1100], 
        info: `
        <div class='popup-title'>Facilities</div>
        <div class='popup-body'>
            <div class='popup-details'>Facilities.</div>
            <div class="image-container">
                <img src='map/description images/22.svg' class='popup-image' alt='Building 22'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '23', 
        name: "Glore Memorial Gymnasium & Pool",
        aliases:["Gym", "gym", "pool", "Pool", "Swimming pool"],
        coords: [1460, 1003], 
        info: `
        <div class='popup-title'>Glore Memorial Gymnasium & Pool</div>
        <div class='popup-body'>
            <div class='popup-details'>Glore Memorial Gymnasium & Pool.</div>
            <div class="image-container">
                <img src='map/description images/23.svg' class='popup-image' alt='Building 23'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '24', 
        name: "Crown Fitness & Wellness Center",
        aliases:["Crown", "crown", "Fitness Center", "fitness center", "Fitness center"],
        coords: [1450, 945], 
        info: `
        <div class='popup-title'>Crown Fitness & Wellness Center</div>
        <div class='popup-body'>
            <div class='popup-details'>
                <li>It’s where the gym, dance room, ice rink, swimming pool, fitness center, and wrestling
                room are located.</li>
            </div>
            <div class="image-container">
                <img src='map/description images/24.svg' class='popup-image' alt='Building 24'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '25', 
        name: "James P. Fitzsimmons Athletic Wing",
        aliases:["Athletic Wing", "Athletic wing", "athletic wing", "Atheletics", "atheletics"],
        coords: [1386, 1050], 
        info: `
        <div class='popup-title'>James P. Fitzsimmons Athletic Wing</div>
        <div class='popup-body'>
            <div class='popup-details'>James P. Fitzsimmons Athletic Wing.</div>
            <div class="image-container">
                <img src='map/description images/25.svg' class='popup-image' alt='Building 25'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '26', 
        name: "MacKenzie Ice Arena",
        aliases:["Ice rink", "Ice arena", "Ice Arena", "ice arena", "ice rink", "Ice", "ice"],
        coords: [1415, 1133], 
        info: `
        <div class='popup-title'>MacKenzie Ice Arena</div>
        <div class='popup-body'>
            <div class='popup-details'>MacKenzie Ice Arena.</div>
            <div class="image-container">
                <img src='map/description images/26.svg' class='popup-image' alt='Building 26'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '27', 
        name: "Deborah MacKenzie Turf Fields",
        aliases:["Turf fields", "Turf", "turf"],
        coords: [1178, 1282], 
        info: `
        <div class='popup-title'>Deborah MacKenzie Turf Fields</div>
        <div class='popup-body'>
            <div class='popup-details'>Deborah MacKenzie Turf Fields.</div>
            <div class="image-container">
                <img src='map/description images/27.svg' class='popup-image' alt='Building 27'>
                <div class="image-overlay"></div>
            </div> 
        </div>
        `
    },
    { 
        markerNum: '28', 
        name: "Warner House",
        aliases:["Warner", "warner", "Warner dorm", "warner dorm", "stinky place"],
        coords: [1170, 1031], 
        info: `
        <div class='popup-title'>Warner House</div>
        <div class='popup-body'>
            <div class='popup-details'>Boys' dorm.</div>
            <div class="image-container">
                <img src='map/description images/28.svg' class='popup-image' alt='Building 28'>
                <div class="image-overlay"></div>
            </div> 
        </div>
            `
    }
];
