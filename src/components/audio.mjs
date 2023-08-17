import intro_music from '../assets/audio/intro_music.mp3';
import fire_shot from '../assets/audio/fire_shot.mp3';
import shot_miss from '../assets/audio/shot_miss.mp3';
import shot_hit from '../assets/audio/shot_hit.mp3';

const audios = {
  intro_music: new Audio(intro_music),
  fire_shot: new Audio(fire_shot),
  shot_miss: new Audio(shot_miss),
  shot_hit: new Audio(shot_hit),
};

export default audios;
