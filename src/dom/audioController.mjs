import audios from '../components/audio.mjs';
import events from '../pubsub/evets.mjs';

const audioController = () => {
  function playIntroMusic() {
    audios.intro_music.loop = true;
    audios.intro_music.currentTime = 0;
    audios.intro_music.play();
  }

  function stopIntroMusic() {
    audios.intro_music.pause();
  }

  function playShot() {
    audios.fire_shot.currentTime = 0;
    audios.fire_shot.play();
  }

  function playShotMiss() {
    audios.shot_miss.currentTime = 0;
    audios.shot_miss.play();
  }

  function playShotHit() {
    audios.shot_hit.currentTime = 0;
    audios.shot_hit.play();
  }

  events.on('playIntro', playIntroMusic);
  events.on('stopIntro', stopIntroMusic);
  events.on('fire_shot', playShot);
  events.on('shot_miss', playShotMiss);
  events.on('shot_hit', playShotHit);
};

export default audioController;
