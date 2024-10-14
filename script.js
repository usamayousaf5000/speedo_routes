const buses = [
    {
        name: "Bus A-1",
        routeNumber: 1,
        stops: ["Railway Station", "Ek Moriya", "Nawaz Sharif Hospital", "Kashmiri Gate", "Lari Adda", "Azadi Chowk", "Taxali Chowk", "Bhatti Chowk"]
    },
    {
        name: "Bus A-2",
        routeNumber: 2,
        stops: ["Samnabad Morr", "Corporation Chowk", "Taj Company", "Sanda", "Double Sarkan", "Moon Market", "Ganda Nala", "Bhatti Chowk"]
    },
    {
        name: "Bus A-3",
        routeNumber: 3,
        stops: ["Railway Station", "Ek Moriya", "Nawaz Sharif Hospital", "Kashmiri Gate", "Lari Adda", "Azadi Chowk", "Timber Market", "Metro","Niazi Chowk","Shahdra Metro Station","Shahdra Lari Adda"]
    },
    {
        name: "Bus A-4",
        routeNumber: 4,
        stops: ["R.A Bazar", "Nadeem Chowk", "Defence Morr", "Shareef Market", "Walton", "Qainchi", "Ghazi Chowk", "Chungi Amar Sidhu"]
    },
    {
        name: "Bus A-5",
        routeNumber: 5,
        stops: ["Shadh Bagh Underpass", "Rajput Park", "Madina Chowk", "Lohay Wali Pulley", "Badami Bagh", "Lari Adda Goal Chakar", "Azadi Chowk", "Taxali Chowk","Bhatti Chowk"]
    },
    {
        name: "Bus A-6",
        routeNumber: 6,
        stops: ["Babu Sabu", "Niazi Adda", "City Bus Stand", "Chowk Yateem Khana", "Bhala Stop", "Samnabad Morr", "Chauburji", "Riwaz Gardern","M.A.O College","Firdous Cinema","Rajh Garh Chowk"]
    },
    {
        name: "Bus A-7",
        routeNumber: 7,
        stops: ["Bagrian", "Depot Chowk", "Minhaj University", "Hamdard Chowk", "Rehmat Eye Hospital", "Pindi Stop", "Peco Morr", "Kot Lakhpt Railway Station","Phatak Mandi","Qainchi","Ghazi Chowk","Chungi Amar Sidhu"]
    },
    {
        name: "Bus A-8",
        routeNumber: 8,
        stops: ["Doctors Hospital", "Wafaqi Colony", "IBA Stop", "Hailey College", "Campus Pull", "Barkat Market", "Kalma Chowk", "Qaddafi Stadium","Canal"]
    },
    {
        name: "Bus A-9",
        routeNumber: 9,
        stops: ["Railway Station", "Haji Camp", "Shimla Pahari", "Lahore Zoo", "Chairing Cross", "Ganga Ram Hospital", "Qartaba Chowk", "Chaburji","Sham Nagar"]
    },
    {
        name: "Bus A-10",
        routeNumber: 10,
        stops: ["Multan Chungi", "Mustafa Town", "Karim Block Market", "PU Examination Center", "Bhekewal Morr", "Wahdat Colony", "Naqsha Stop", "Canal","Ichra","Shama","Qartaba Chowk"]
    },
    {
        name: "Bus A-11",
        routeNumber: 11,
        stops: ["Babu Sabu", "Niazi Adda", "City Bus Stand", "Chowk Yateem Khana", "Scheme Morr", "Flat Stop", "Dubai Chowk", "Bhekewal Morr","Sheikh Zaid Hospital","Campus Pull","Barkat Market","Kalma Chowk","Liberty Chowk","Hafeez Center","Mini Market","Main Market,Gulberg"]
    },
    {
        name: "Bus A-12",
        routeNumber: 12,
        stops: ["R.A Bazar", "PAF Market", "Girja Chowk", "Fotress Stadium", "Gymkhana", "Aitchison College", "PC Hotel", "Lahore Zoo","Chairing Cross","GPO","Anarkali","Civil Secretariat"]
    },
    {
        name: "Bus A-13",
        routeNumber: 13,
        stops: ["Bagrian", "Ghazi Chowk", "UMT Stop", "Khokar Chowk", "Akbar Chowk", "Pindi Stop", "Peco Morr", "Phattak Mandi","Ittefaq Hospital","Model Town","Kalma Chowk"]
    },
    {
        name: "Bus A-14",
        routeNumber: 14,
        stops: ["R.A Bazar", "Fauji Foundation", "Ali View Gardern", "Bhatta Chowk", "DHA Nursery", "LESCO", "Chota Ishara Stop", "Naka Stop","Ghazi Chowk","Chungi Amar Sidhu"]
    },
    {
        name: "Bus A-15",
        routeNumber: 15,
        stops: ["Qartaba Chowk", "Hakeem M.Ajmal Khan Road", "Gulshan Ravi Road", "Kacha Ferozepur Road", "Babu Sabu"]
    },
    {
        name: "Bus A-16",
        routeNumber: 16,
        stops: ["Railway Station", "Circular Road", "Ek Moriya", "Bhatti Chowk"]
    },
    {
        name: "Bus A-17",
        routeNumber: 17,
        stops: ["Canal", "Main Bouleward Shadman", "Davis Road", "Shimla Pahari", "Haji Camp", "Railway Station"]
    },
    {
        name: "Bus A-18",
        routeNumber: 18,
        stops: ["Bhatti Chowk", "Circular Road", "Nisbat Road", "Abbot Road", "Shimla Pahari"]
    },
    {
        name: "Bus A-19",
        routeNumber: 19,
        stops: ["Main Market", "Jail Road", "Lytton Road", "Crust Road", "Lower Mall Road", "Bhatti Chowk"]
    },
    {
        name: "Bus A-20",
        routeNumber: 20,
        stops: ["Jain Mandar", "Al-Mumtaz Road", "Poonch Road", "Lake Road", "Chowk Yateem Khana"]
    },
    {
        name: "Bus A-21",
        routeNumber: 21,
        stops: ["Depot Chowk", "Madar-e-Milat Road", "Ali Road", "Baig Road", "Canal Bank Road", "Thokar Niaz Baig"]
    },
    {
        name: "Bus A-22",
        routeNumber: 22,
        stops: ["Depot Chowk", "Madar-e-Milat Road", "Sutlej Avenue", "Shahrah Nazria-e-Pakistan", "Thokar Niaz Baig"]
    },
    {
        name: "Bus A-23",
        routeNumber: 23,
        stops: ["Valencia", "Valencia Main Boulevard", "Khayaban-e-Jinnah", "Raiwind Road", "Thokar Niaz Baig"]
    },
    {
        name: "Bus A-24",
        routeNumber: 24,
        stops: ["Multan Chungi", "College Road", "Maulana Shaukat Ali Road", "Wahdat Road", "Ghazi Chowk"]
    },
    {
        name: "Bus A-25",
        routeNumber: 25,
        stops: ["R.A Bazar", "Lahore-Bedian Road", "Allama Iqbal Road", "Railway Station"]
    },
    {
        name: "Bus A-26",
        routeNumber: 26,
        stops: ["R.A Bazar", "G.T Road", "Shalimar Link Road", "Tufail Road", "Sarfraz Rafique Road","Daroghawala"]
    },
    {
        name: "Bus A-27",
        routeNumber: 27,
        stops: ["Bata Pur", "G.T Road", "Daroghawala"]
    },
    {
        name: "Bus A-28",
        routeNumber: 28,
        stops: ["Quaid e Azam Interchange", "Harbanspura Road", "Zarar Shaheed Road", "Airport"]
    },
    {
        name: "Bus A-29",
        routeNumber: 29,
        stops: ["Niazi Interchange", "Lahore Ring Road", "Band Road", "Sue Wala Road", "Salamat Pura"]
    },
    {
        name: "Bus A-30",
        routeNumber: 30,
        stops: ["Daroghawala", "G.T Road", "Shalimar Link Road", "Airport"]
    },
    {
        name: "Bus A-31",
        routeNumber: 31,
        stops: ["Daroghawala", "Chamra Mandi", "Cooper Store", "UET", "Shalimar Chowk","Lari Adda"]
    },
    {
        name: "Bus A-32",
        routeNumber: 32,
        stops: ["Shimla Pahari", "Durand Road", "Queen Marry Road", "Gari Shahu Bridge", "Cooper Store","Chamra Mandi","Ek Moriya"]
    },
    {
        name: "Bus A-33",
        routeNumber: 33,
        stops: ["Cooper Store", "Workshop Road", "Mughalpura Road", "Mughalpura"]
    },
    {
        name: "Bus A-34",
        routeNumber: 34,
        stops: ["Singhpura", "Wheatman Road", "Griffen Road","Mughalpura"]
    },


];

function populateStops() {
    const startSelect = document.getElementById('start-point');
    const endSelect = document.getElementById('end-point');

    let allStops = new Set();
    buses.forEach(bus => {
        bus.stops.forEach(stop => allStops.add(stop));
    });

    allStops.forEach(stop => {
        let option1 = document.createElement('option');
        option1.value = stop;
        option1.textContent = stop;

        let option2 = option1.cloneNode(true);

        startSelect.appendChild(option1);
        endSelect.appendChild(option2);
    });
}

// Function to find the bus and display route details in separate cards
function findBus(start, end) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; 

    let busFound = false;
    
    for (const bus of buses) {
        const startIndex = bus.stops.indexOf(start);
        const endIndex = bus.stops.indexOf(end);

        if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
            const card = document.createElement('div');
            card.classList.add('card');
    
            let selectedStops = '';
            for (let i = startIndex; i <= endIndex; i++) {
                selectedStops += bus.stops[i];
                if (i !== endIndex) selectedStops += '<br>';
            }
    
            card.innerHTML = `
                <h2>Bus Found</h2>
                <p><strong>Bus Name:</strong> ${bus.name}</p>
                <p><strong>Route Number:</strong> ${bus.routeNumber}</p>
                <p><strong>Stops during your route</strong><br> ${selectedStops}</p>
            `;
            resultContainer.appendChild(card);
            busFound = true;
        }
        else if (startIndex !== -1 && endIndex !== -1 && startIndex > endIndex) {
            const card = document.createElement('div');
            card.classList.add('card');
    
            let selectedStops = '';
            for (let i = startIndex; i >= endIndex; i--) {
                selectedStops += bus.stops[i];
                if (i !== endIndex) selectedStops += '<br>';
            }
    
            card.innerHTML = `
                <h2>Bus Found</h2>
                <p><strong>Bus Name:</strong> ${bus.name}</p>
                <p><strong>Route Number:</strong> ${bus.routeNumber}</p>
                <p><strong>Stops during your route</strong><br> ${selectedStops}</p>
            `;
            resultContainer.appendChild(card);
            busFound = true;
        }
    }

    if (!busFound) {
        const noBusMessage = document.createElement('div');
        noBusMessage.classList.add('card');
        noBusMessage.innerHTML = '<p>No bus found for the specified route.</p>';
        resultContainer.appendChild(noBusMessage);
    }
}

document.getElementById('findBusBtn').addEventListener('click', function() {
    const startingPoint = document.getElementById('start-point').value;
    const endingPoint = document.getElementById('end-point').value;

    if (startingPoint && endingPoint) {
        findBus(startingPoint, endingPoint);
    } else {
        alert("Please select both starting and ending points.");
    }
});

window.onload = populateStops;