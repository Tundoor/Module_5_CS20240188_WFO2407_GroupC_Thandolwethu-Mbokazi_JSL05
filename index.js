// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "This is what autumn feels like", artist: "JVKE", genre: "Pop"},
    { title: "Smokin' out the window", artist:"Silk Sonic", genre: "R&B"}
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
     "Drax" : "R&B",
     "Rocket" : "Rock",
     "Groot" : "Pop", 
    // Add preferences for Drax, Rocket, and Groot
};



// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {

    namesOfGuardians = Object.keys(guardians);
    
    // Checks favourite genre of each guardian
    namesOfGuardians.forEach(guardianName => {
        let eachGenre = guardians[guardianName]; 

        
        // Creates playlist for the song
        let filteredSongs = songs.filter(newArr => newArr.genre === eachGenre);
        let mappedSongs = filteredSongs.map(newArr => ({ artist: newArr.artist, title: newArr.title }));
         
        //Creating heading for Div
        
        let mainContainer = document.getElementById("playlists");
        let container =  document.createElement("div");
        mainContainer.appendChild(container)
        // adds CSS styling to playlist Div
        
        container.classList.add('playlist')
        
        //Created heading for styles
        let heading = document.createElement('h1');
        heading.textContent = `Playlist ${guardianName}`; 
        container.appendChild(heading);
      
       // Creating paragraphs
         let list = document.createElement('ul')
         list.style.listStyleType = 'none'; //removes dots from UL
            container.appendChild(list)

    // Add this for each styling
        mappedSongs.forEach(song => {
            // Creates list for playlists
            let listItems = document.createElement("li")
            listItems.classList.add('song')
            
            // Styling for songtitle
            let songTitle = document.createElement("span")
            songTitle.classList.add('song-title');
            songTitle.textContent = `${song.title}`;

            //Styling for songlist
            let songArtist = document.createElement("span");
            songArtist.classList.add('song-artist');
            songArtist.textContent = `${song.artist}`;
    
            // Append the song title first
             listItems.appendChild(songTitle);
    
            // Append the text 'by'
            listItems.appendChild(document.createTextNode(' by '));
            
           
            listItems.appendChild(songArtist);

            
            list.appendChild(listItems);
        });
       
    });
         
        };
      

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


