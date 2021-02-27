const unorderList = document.querySelector('ul');
let items = '';

function incrementValue(i) {
  playlists[i].score = playlists[i].score + 1;
  document.getElementById(`score-${i}`).innerHTML = playlists[i].score;
  getTotalScore();
  mostVote();
}

function getTotalScore() {
  let totalScore = 0;
  for (let i = 0; i < playlists.length; i++) {
    totalScore = totalScore + playlists[i].score;
  }
  document.getElementById('totalScore').innerHTML = totalScore;
}

function mostVote() {
  let currentHigh = 0;
  for (let i = playlists.length - 1; i >= 0; i--) {
    if (playlists[i].score > currentHigh) {
      currentHigh = playlists[i].score;
      document.getElementById('mostVote').innerHTML = `${playlists[i].band} - ${playlists[i].title}`;
      document.getElementById('scoreMostVote').innerHTML = playlists[i].score;
    } else if (playlists[i].score === currentHigh) {
      document.getElementById('mostVote').innerHTML = `masih ada lagu yang imbang`;
      document.getElementById('scoreMostVote').innerHTML = '';
    }
  }
}

for (let i = 0; i < playlists.length; i++) {
  let playlist = playlists[i];
  items += `
      <li>
        <div>
            <div>${playlist.band} - ${playlist.title} </div> <button onclick="incrementValue(${i})">vote me!</button>
            <div> score: <div id="score-${i}">${playlist.score}</div></div>
          </div>
        </div>
      </li>
    `;
}

let listItem = `${items}`;

unorderList.innerHTML = listItem;