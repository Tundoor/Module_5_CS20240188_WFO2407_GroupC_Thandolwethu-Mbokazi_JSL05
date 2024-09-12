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
    // Use the map() function to create playlists for each Guardian
    // Your code here
    
 namesOfGuardians = Object.keys(guardians);
    
    // Checks favourite genre of each guardian
    namesOfGuardians.forEach(guardianName => {
        let eachGenre = guardians[guardianName]; 
        console.log(guardianName); // Log guardian's name
        
        let filteredSongs = songs.filter(newArr => newArr.genre === eachGenre);
        let mappedSongs = filteredSongs.map(newArr => ({ artist: newArr.artist, title: newArr.title }));
        // Loop through songs 
        console.log(`Playlist for ${guardianName} (Genre: ${eachGenre})`)
      
        mappedSongs.forEach(song => {
            console.log(`${song.title} by ${song.artist}`);
        });
        console.log(); // Add a blank line for readability between playlists
    });
         
        };
      



// Call generatePlaylist and display the playlists for each Guardian
console.log(generatePlaylist(guardians, songs));


