import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import { api } from './links'
import Movie from './components/Movies'
import './App.css'
import Search from './components/Search'
import Contact from './components/Contact'

const App = () => {

  const [movies, setMovies] = useState([])

  const fetchRandomMovies = () => {
    axios.get(api)
      .then((response) => {
        setMovies(response.data.results)
        console.log(response.data.results)
      })
      .catch((error) => {
        setMovies([
          {
            "adult": false,
            "backdrop_path": "/sLCN5b2WYsYkWMrMMCnRHGv1VEO.jpg",
            "genre_ids": [
              16,
              10751,
              14
            ],
            "id": 18095,
            "original_language": "ja",
            "original_title": "ドラゴンボールGT 悟空外伝! 勇気の証しは四星球(スーシンチュウ)",
            "overview": "Son Goku Jr. is the great-great-great-great-grandson of the legendary martial artist Son Goku. However, unlike his predecessor he's not a brave fighter. He's constantly picked on by school bullies, his grandmother Pan sees this and she's worried, but even though Goku Jr. is not a strong and powerful Saiyan, he has a kind heart, and Pan loves him. When Pan gets sick Goku Jr. realizes he must do something if he doesn't want to lose Pan. Then he will remember about the legends of the Dragon Balls. It was told they granted a wish to the bearer, Goku Jr. needs a magical wish more than ever.",
            "popularity": 202.906,
            "poster_path": "/vjqcrp7nQGUVkVWeJR3HUAj0AyR.jpg",
            "release_date": "1997-03-26",
            "title": "Dragon Ball GT: A Hero's Legacy",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 253
          },
          {
            "adult": false,
            "backdrop_path": "/n6rv1hySg2Ie0UyJENwnnJWb3no.jpg",
            "genre_ids": [
              28,
              16,
              12
            ],
            "id": 575249,
            "original_language": "ja",
            "original_title": "Dragon Ball Z: The Real 4-D at 超天下一武道会",
            "overview": "Dragon Ball Z: The Real 4-D at Super Tenkaichi Budoka is a cinematic attraction at Universal Studios Japan and the successor to Dragon Ball Z: The Real 4-D. Like its predecessor, it is a new installment in the Dragon Ball series, this time primarily featuring the face off between Super Saiyan Blue Goku and Broly God.",
            "popularity": 202.844,
            "poster_path": "/bsML7r1iijCiGjowbcUfsgtrUWH.jpg",
            "release_date": "2017-06-30",
            "title": "Dragon Ball Z: The Real 4-D at Super Tenkaichi Budokai",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 17
          },
          {
            "adult": false,
            "backdrop_path": "/rdOIqwR7P7fvTpC6LILSmQxEg6O.jpg",
            "genre_ids": [
              28,
              53,
              80
            ],
            "id": 763285,
            "original_language": "en",
            "original_title": "Ambulance",
            "overview": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
            "popularity": 202.724,
            "poster_path": "/kuxjMVuc3VTD7p42TZpJNsSrM1V.jpg",
            "release_date": "2022-03-16",
            "title": "Ambulance",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 1106
          },
          {
            "adult": false,
            "backdrop_path": "/rRpAZOPY3XxMJY65AJ396IWyjU4.jpg",
            "genre_ids": [
              16,
              10751,
              14
            ],
            "id": 14836,
            "original_language": "en",
            "original_title": "Coraline",
            "overview": "When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.",
            "popularity": 202.673,
            "poster_path": "/gPMh5rsVrDDAYMDbTcz6Up1DQ4z.jpg",
            "release_date": "2009-02-05",
            "title": "Coraline",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 6010
          },
          {
            "adult": false,
            "backdrop_path": "/zn13a7U9eMTJq8sHthe3bCgsVm4.jpg",
            "genre_ids": [
              28,
              12,
              14
            ],
            "id": 122917,
            "original_language": "en",
            "original_title": "The Hobbit: The Battle of the Five Armies",
            "overview": "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
            "popularity": 202.271,
            "poster_path": "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
            "release_date": "2014-12-10",
            "title": "The Hobbit: The Battle of the Five Armies",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 12265
          },
          {
            "adult": false,
            "backdrop_path": "/lP61RjFsniAfkdbbxjAHHlEqhLk.jpg",
            "genre_ids": [
              18
            ],
            "id": 911129,
            "original_language": "fr",
            "original_title": "Sous emprise",
            "overview": "Roxana Aubrey decides to drop her studies and escape her life in Paris for a free diving course in the south of France. She is quickly pulled into a life that reaches new depths brought by the weight of an ocean's descent.",
            "popularity": 200.704,
            "poster_path": "/fUdeneiMUQkE1Yb3Qx7dML0HVf.jpg",
            "release_date": "2022-09-09",
            "title": "No Limit",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 86
          },
          {
            "adult": false,
            "backdrop_path": "/qK7Ssnrfvrt65F66A1thvehfQg2.jpg",
            "genre_ids": [
              16,
              10751,
              35,
              12,
              9648
            ],
            "id": 420821,
            "original_language": "en",
            "original_title": "Chip 'n Dale: Rescue Rangers",
            "overview": "Decades since their successful television series was canceled, Chip has succumbed to a life of suburban domesticity as an insurance salesman. Dale, meanwhile, has had CGI surgery and works the nostalgia convention circuit, desperate to relive his glory days. When a former cast mate mysteriously disappears, Chip and Dale must repair their broken friendship and take on their Rescue Rangers detective personas once again to save their friend’s life.",
            "popularity": 200.511,
            "poster_path": "/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
            "release_date": "2022-05-18",
            "title": "Chip 'n Dale: Rescue Rangers",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 775
          },
          {
            "adult": false,
            "backdrop_path": "/fW1SbOA17W78ccXpJHxCwugi3tw.jpg",
            "genre_ids": [
              10749,
              18,
              35
            ],
            "id": 805327,
            "original_language": "en",
            "original_title": "Look Both Ways",
            "overview": "On the eve of her college graduation, Natalie's life diverges into two parallel realities: one in which she becomes pregnant and must navigate motherhood as a young adult in her Texas hometown, the other in which she moves to LA to pursue her career. In both journeys throughout her twenties, Natalie experiences life-changing love, devastating heartbreak and rediscovers herself.",
            "popularity": 200.244,
            "poster_path": "/jq8IGJgg16mJ95a5OPyS7eGJaam.jpg",
            "release_date": "2022-08-17",
            "title": "Look Both Ways",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 315
          },
          {
            "adult": false,
            "backdrop_path": "/kPtN2N9zxXpSSuHVBSyZnRuDjM8.jpg",
            "genre_ids": [
              18,
              53,
              10752
            ],
            "id": 7445,
            "original_language": "en",
            "original_title": "Brothers",
            "overview": "When his helicopter goes down during his fourth tour of duty in Afghanistan, Marine Sam Cahill is presumed dead. Back home, brother Tommy steps in to look over Sam’s wife, Grace, and two children. Sam’s surprise homecoming triggers domestic mayhem.",
            "popularity": 199.983,
            "poster_path": "/ySXRgHCdelVtvUyHcKGpiQKb052.jpg",
            "release_date": "2009-01-22",
            "title": "Brothers",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 2469
          },
          {
            "adult": false,
            "backdrop_path": "/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg",
            "genre_ids": [
              27,
              9648
            ],
            "id": 632357,
            "original_language": "en",
            "original_title": "The Unholy",
            "overview": "Alice is young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
            "popularity": 199.657,
            "poster_path": "/bShgiEQoPnWdw4LBrYT5u18JF34.jpg",
            "release_date": "2021-03-31",
            "title": "The Unholy",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 1723
          },
          {
            "adult": false,
            "backdrop_path": "/bTLnotEeJpnS57py0Onh3Bf4Yl0.jpg",
            "genre_ids": [
              28,
              18,
              12
            ],
            "id": 875104,
            "original_language": "zh",
            "original_title": "叶问宗师觉醒",
            "overview": "When a young Master Ip stops a kidnapping, he ignites a turf war with a ruthless human trafficking ring. In retaliation, the gang kidnaps one of Ip Man’s close friends, forcing him to face the group’s brutal boxing champion head-on.",
            "popularity": 198.719,
            "poster_path": "/A7vhdyGrpPMKXsuFBZzxmave94F.jpg",
            "release_date": "2022-06-21",
            "title": "Ip Man: The Awakening",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 53
          },
          {
            "adult": false,
            "backdrop_path": "/7py8kUCYaOdFn1TfVS87BDBySOz.jpg",
            "genre_ids": [
              35,
              12,
              878
            ],
            "id": 550988,
            "original_language": "en",
            "original_title": "Free Guy",
            "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            "popularity": 197.398,
            "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
            "release_date": "2021-08-11",
            "title": "Free Guy",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 6257
          },
          {
            "adult": false,
            "backdrop_path": "/wNQpfAZkySbinb93qVwWIWaot1x.jpg",
            "genre_ids": [
              10402,
              14,
              35,
              878,
              10751,
              10770
            ],
            "id": 809107,
            "original_language": "en",
            "original_title": "Z-O-M-B-I-E-S 3",
            "overview": "Zed and Addison are beginning their final year at Seabrook High in the town that’s become a safe haven for monsters and humans alike. Zed is anticipating an athletic scholarship that will make him the first Zombie to attend college, while Addison is gearing up for Seabrook’s first international cheer-off competition. Then suddenly, extraterrestrial beings appear around Seabrook, provoking something other than friendly competition.",
            "popularity": 197.148,
            "poster_path": "/ug8X5UkgdvcZ0WW0WNo5p0F1NGn.jpg",
            "release_date": "2022-07-09",
            "title": "Z-O-M-B-I-E-S 3",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 223
          },
          {
            "adult": false,
            "backdrop_path": "/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg",
            "genre_ids": [
              12,
              14,
              28
            ],
            "id": 121,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Two Towers",
            "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
            "popularity": 195.838,
            "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
            "release_date": "2002-12-18",
            "title": "The Lord of the Rings: The Two Towers",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 18631
          },
          {
            "adult": false,
            "backdrop_path": "/ljkEEcpCF2x8pkcO2jmQSdRTdaE.jpg",
            "genre_ids": [
              35,
              28,
              18
            ],
            "id": 885266,
            "original_language": "fr",
            "original_title": "Kung-Fu Zohra",
            "overview": "Zohra is convinced that separating from her husband Omar would break her little girl’s heart and so determines not to leave him despite the violence he metes out. Then she meets Chang Sue, the caretaker of the gym where she works to make ends meet. When she learns that he’s a kung fu master, Zohra asks him to teach her some self-defence basics…",
            "popularity": 195.75,
            "poster_path": "/uHTgTqZCQN5kd22QlyZMpPcFU3s.jpg",
            "release_date": "2022-03-09",
            "title": "Kung-Fu Zohra",
            "video": false,
            "vote_average": 5.4,
            "vote_count": 25
          },
          {
            "adult": false,
            "backdrop_path": "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
            "genre_ids": [
              878,
              28,
              12
            ],
            "id": 24428,
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "popularity": 195.323,
            "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
            "release_date": "2012-04-25",
            "title": "The Avengers",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 27490
          },
          {
            "adult": false,
            "backdrop_path": "/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg",
            "genre_ids": [
              16,
              10751,
              12,
              14,
              28,
              10770
            ],
            "id": 726684,
            "original_language": "fr",
            "original_title": "Miraculous World: Shanghai, la légende de Ladydragon",
            "overview": "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!",
            "popularity": 194.729,
            "poster_path": "/qQ0VKsGRQ2ofAmswGNzZnvC1xPE.jpg",
            "release_date": "2021-05-15",
            "title": "Miraculous World: Shanghai – The Legend of Ladydragon",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 473
          },
          {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
              80
            ],
            "id": 405869,
            "original_language": "ja",
            "original_title": "女医肉奴隷",
            "overview": "",
            "popularity": 194.629,
            "poster_path": "/rqZn4V6ugU3FmBYPxagv9vjR6zR.jpg",
            "release_date": "1986-03-08",
            "title": "Female Doctor: Flesh Slave",
            "video": false,
            "vote_average": 3.8,
            "vote_count": 4
          },
          {
            "adult": false,
            "backdrop_path": "/yCLPWu56FBKaLeK2DsnQr4QLkIt.jpg",
            "genre_ids": [
              28,
              9648,
              53,
              878
            ],
            "id": 615173,
            "original_language": "ko",
            "original_title": "마녀 2",
            "overview": "A girl wakes up in a huge secret laboratory, then accidentally meets another girl who is trying to protect her house from a gang. The mystery girl overthrows the gang with her unexpected powers, and laboratory staff set out to find her.",
            "popularity": 193.262,
            "poster_path": "/9YTuscJXmr9Iua62amCgGSU8PDW.jpg",
            "release_date": "2022-06-15",
            "title": "The Witch: Part 2. The Other One",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 64
          },
          {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
              10749
            ],
            "id": 721187,
            "original_language": "ko",
            "original_title": "미용실 : 특별한 서비스 4",
            "overview": "Focusing on the relationship between men and women in a beauty salon, Dae-hye, the director of a korean erotic film beauty salon, becomes more difficult to sell in a depression. The building owner’s rent pressure also comes in, and employee Juhee suggests to Dae-hye to do a bikini service, saying that a bikini beauty salon has hit the jackpot in a foreign country. Surprisingly, bikini service is on the jackpot and guests are increasingly looking for a more powerful service.",
            "popularity": 192.367,
            "poster_path": "/nJpoe1CKuiqh90qUliO6qHCeNYI.jpg",
            "release_date": "2020-05-04",
            "title": "Beauty Salon: Special Services 4",
            "video": false,
            "vote_average": 9,
            "vote_count": 1
          }
        ])
        console.error(error);
      })
  }

  useEffect(() => {
    fetchRandomMovies()
  }, [])

  return (
    <div className='apps'>
      <Search/>
      <Navbar />
      <Movie movies={movies} />
      <Contact/>
    </div>
  )
}

export default App