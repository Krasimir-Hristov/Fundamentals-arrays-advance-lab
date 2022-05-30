function solve(input){
    
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();
    
    for(let currSong of input){
        let [type1, name, time] = currSong.split(`_`);
        
        let song = new Song(type1, name, time);
        songs.push(song);
    }
    if(typeSong === `all`){
        songs.forEach((i) => console.log(i.name))
    }else{
        let filtered = songs.filter((x )=> x.type === typeSong).forEach((x) => console.log(x.name));
        
        
    }


 
    
//    songs.forEach(x => {
//      let curTime =  x.time.split(`:`)
    
//         if(curTime[0] < 4){
//             curTime[0] = 10;
            
//             curTime = curTime.join(`:`)
            
//             x.time = curTime
//         }
        
//     })
//     songs.forEach(x => console.log(x))
    // for (const element of newSongs) {
    //     console.log(element)
    // }
    

}
// solve([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])    