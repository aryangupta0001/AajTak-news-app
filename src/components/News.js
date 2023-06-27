import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Annabelle Timsit",
      "title": "Teen on Titan sub hoped to solve Rubik's Cube 12000 feet down, mom says - The Washington Post",
      "description": "The mother of Suleman Dawood, 19, who died on the Titan submersible, said he took his Rubik's Cube with him in the hopes of breaking a world record.",
      "url": "https://www.washingtonpost.com/nation/2023/06/26/suleman-dawood-titanic-rubiks-cube/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AABBWWBYLYPDW65HGUALZGRLWY.jpg&w=1440",
      "publishedAt": "2023-06-26T14:14:30Z",
      "content": "Comment on this story\r\nComment\r\nSuleman Dawood never went anywhere without aRubiks Cube. The submersible to explore the wreckage of the Titanic at the bottom of the North Atlantic Ocean was no except… [+4443 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tampa Bay Times"
      },
      "author": "Associated  Press",
      "title": "Gators set College World Series record for runs with 24, force Game 3 - Tampa Bay Times",
      "description": "Florida hits six home runs on a windy day and pounds LSU pitching for a CWS record-tying 23 hits a day after striking out 20 times, including 17 to Ty Floyd.",
      "url": "https://www.tampabay.com/sports/gators/2023/06/25/florida-gators-baseball-college-world-series-lsu-ty-evans-jac-caglianone/",
      "urlToImage": "https://www.tampabay.com/resizer/-MeUZHsdaVZNXpKECCUPL456JMs=/1200x675/filters:focal(1725x1045:1735x1035)/cloudfront-us-east-1.images.arcpublishing.com/tbt/LJ56ATMHFXOLSJ6PW7EQN4LKCI.jpg",
      "publishedAt": "2023-06-26T13:29:56Z",
      "content": "OMAHA, Neb. Florida had been involved in more close games than any other team at the College World Series this year.\r\nThat changed in a big way Sunday, when the Gators unleashed an offensive barrage … [+4696 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Tom Phillips",
      "title": "Pikmin 4 streamlines its strategy, and partners you with a scene-stealing space pup - Eurogamer.net",
      "description": "Eurogamer's hands-on preview of Pikmin 4, a streamlined sequel with a scene-stealing pup.",
      "url": "https://www.eurogamer.net/pikmin-4-streamlines-its-strategy-and-partners-you-with-a-scene-stealing-space-pup",
      "urlToImage": "https://assetsio.reedpopcdn.com/pikmin-4-announcement-art.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "publishedAt": "2023-06-26T13:00:00Z",
      "content": "It's been eight years - eight years! - since Pikmin creator and Nintendo legend Shigeru Miyamoto announced the existence of Pikmin 4 to Eurogamer back in 2015. Now, excitingly, it's just a few weeks … [+6782 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Samya Kullab",
      "title": "Chaos in Russia is morale booster for Ukraine as it pushes on with early stages of counteroffensive - The Associated Press",
      "description": "KYIV, Ukraine (AP) — The armed rebellion against the Russian military may have been over in less than 24 hours,  but the disarray within the enemy’s ranks was an unexpected gift and timely morale booster for Ukrainian troops.",
      "url": "https://apnews.com/article/russia-ukraine-war-morale-7cd580835746a4d0c66edf662e4faa20",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/c9bfc1b4e9eb42a6a77fa8d36d9a20b6/3000.webp",
      "publishedAt": "2023-06-26T12:34:03Z",
      "content": "KYIV, Ukraine (AP) The armed rebellion against the Russian military may have been over in less than 24 hours, but the disarray within the enemys ranks was an unexpected gift and timely morale booster… [+5583 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": null,
      "title": "Man killed, cruise ships disrupted after 30-foot yacht hits ferry near Miami port - CBS News",
      "description": "The ferry crew successfully retrieved one person who was taken to the hospital in critical condition.",
      "url": "https://www.cbsnews.com/news/boat-hits-ferry-death-cruise-disruptions-miami-port/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/26/2a259c6e-c81b-4b31-8fd6-7e826257e491/thumbnail/1200x630/213bf789096e44a77576acd121670ac2/zqomvpjo.jpg?v=74b410729cdff54299e4158e8919d920",
      "publishedAt": "2023-06-26T12:22:25Z",
      "content": "PortMiami reopens after deadly ferry crash near Dodge Island \r\nPortMiami reopens after deadly ferry crash near Dodge Island02:33\r\nA man was killed and another was critically injured Sunday after a bo… [+1658 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "MLB Power Rankings: Braves knock Rays out of No. 1 spot, Giants move into top five - CBS Sports",
      "description": "The Rays haven't looked great in a few weeks, so it's finally time for a change at the top",
      "url": "https://www.cbssports.com/mlb/news/mlb-power-rankings-braves-knock-rays-out-of-no-1-spot-giants-move-into-top-five/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/26/b118c19c-8bd3-45ca-9093-6cd22f47d97c/thumbnail/1200x675/414b2e3745f53e66b79ddc7fd46f197a/mlbpowerrankings0626.png",
      "publishedAt": "2023-06-26T12:13:25Z",
      "content": "Thanks to the Tampa Bay Rays storming out of the gates with a historic 13-0 start, along with their continued excellence thereafter, the number one spot in these power rankings hasn't been contested … [+13209 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Robyn Dixon",
      "title": "Russian leaders try to reassert control after mercenary rebellion - The Washington Post",
      "description": "The Russian president remained out of public sight as did Wagner mercenary boss Yevgeniy Prigozhin, while Russians wondered about what the failed rebellion would mean for the country.",
      "url": "https://www.washingtonpost.com/world/2023/06/26/putin-prigozhin-russia-rebellion-wagner/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-26-2023/t_eba258f4e76647378626a3b0e189c6f3_name_PW2G4ZZ7VAVGD7LUAI76BPFS5E.jpg&w=1440",
      "publishedAt": "2023-06-26T12:07:37Z",
      "content": "Comment on this story\r\nComment\r\nRIGA, Latvia Russias embattled leadership tried to demonstrate control on Monday after the bruising, chaotic mutiny by Yevgeniy Prigozhin and his Wagner mercenary grou… [+5158 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Pfizer.com"
      },
      "author": "Pfizer",
      "title": "Pfizer Provides Update on GLP-1-RA Clinical Development Program for Adults with Obesity and Type 2 Diabetes Mellitus - Pfizer",
      "description": null,
      "url": "https://www.pfizer.com/news/press-release/press-release-detail/pfizer-provides-update-glp-1-ra-clinical-development",
      "urlToImage": "https://cdn.pfizer.com/pfizercom/2022-10/banner_section/Image%20BG.png?4tyemIp2FXEdHBgjD7vUl9.UvQlMpFH3",
      "publishedAt": "2023-06-26T11:58:10Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NBC New York"
      },
      "author": "Storm Team 4",
      "title": "NYC area faces severe weather risk with possible destructive winds, large hail and flash flooding - NBC New York",
      "description": "What you need to know.",
      "url": "https://www.nbcnewyork.com/weather/nyc-area-faces-severe-weather-risk-with-possible-destructive-winds-large-hail-and-flash-flooding/4453485/",
      "urlToImage": "https://media.nbcnewyork.com/2022/05/nyc-rain.png?resize=1200%2C675&quality=85&strip=all",
      "publishedAt": "2023-06-26T11:52:51Z",
      "content": "<ul><li>The possibility of severe storms threatens the tri-state are Monday.</li><li>Although Monday morning brings the probability of isolated showers and storms, the severe weather is not likely un… [+1917 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AOL"
      },
      "author": "JENNIFER O'MAHONY",
      "title": "H&M workers strike for higher pay across Spain, shutting down stores - AOL",
      "description": "More than 4,000 Spanish employees at the Swedish multinational's brands including H&M, Other Stories and Cos are seeking pay rises in line with the higher...",
      "url": "https://www.aol.com/news/h-m-workers-strike-higher-113930522.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GgLHrHxvJeYzoyM3NFSy7A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/aol_associated_press_484/afc9b0dc6ef39f7a19498e4dc2ca397c",
      "publishedAt": "2023-06-26T11:39:30Z",
      "content": "MADRID (AP) Hundreds of retail workers on Monday walked off the job across Spain in a new round of strikes against the fashion giant H&amp;M Group, extending a series of store closures in the middle … [+2315 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Rajesh Pandey",
      "title": "Some Google Pixel phones have excessive battery drain after June Feature Drop - Android Police",
      "description": "A few people also face connectivity issues following the update",
      "url": "https://www.androidpolice.com/some-google-pixel-phones-excessive-battery-drain-june-feature-drop/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/06/new-budget-phone-or-old-flagship-resized-4.jpg",
      "publishedAt": "2023-06-26T10:53:00Z",
      "content": "Google rolls out a new Feature Drop for its Pixel phones every quarter. With the June 2023 Feature Drop, the company added several new features like cinematic wallpapers, improvements to its Recorder… [+1777 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WWLP.com"
      },
      "author": "Tony Fay",
      "title": "Weather Alert: Chance for strong to severe storms Monday - WWLP.com",
      "description": "The 22News Storm Team has issued a Weather Alert for Monday for the possibility of strong to severe thunderstorms mainly in the afternoon.",
      "url": "https://www.wwlp.com/weather/weather-news/weather-alert-chance-for-strong-to-severe-storms-monday/",
      "urlToImage": "https://www.wwlp.com/wp-content/uploads/sites/26/2023/06/severe-thunderstorm-threat.jpg?w=1280",
      "publishedAt": "2023-06-26T10:13:54Z",
      "content": "CHICOPEE, Mass. (WWLP) – The 22News Storm Team has issued a Weather Alert for Monday for the possibility of strong to severe thunderstorms mainly in the afternoon.\r\n22News Storm Team Meteorologist Ch… [+600 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Jeff Zillgitt",
      "title": "2024 NBA mock draft: Bronny James, Matas Buzelis among potential stars - USA TODAY",
      "description": "A year out from the 2024 NBA draft, USA TODAY Sports' Jeff Zillgitt looks into his crystal ball to predict the next round of up-and-coming talent.",
      "url": "https://www.usatoday.com/story/sports/nba/2023/06/26/2024-nba-mock-draft-matas-buzelis-bronny-james-potential-stars/70352603007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/25/USAT/c778d412-f893-4672-a118-051618dc1d2f-USATSI_20356473.jpg?crop=3192,1795,x519,y126&width=3192&height=1795&format=pjpg&auto=webp",
      "publishedAt": "2023-06-26T10:10:59Z",
      "content": "Familiar themes have emerged for the 2024 NBA draft.\r\nFamily ties are prevalent. G League Ignite players are prominent in first-round projections. Big men are enjoying a renaissance. And the No. 1 pi… [+2411 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Karen Friar",
      "title": "Stock futures slip as market weighs Russia mutiny: Stock market news today - Yahoo Finance",
      "description": "Stock futures pointed to a slightly lower open on Monday, as investors considered what the weekend's short-lived challenge to Putin by armed mercenaries in...",
      "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-today-june-26-2023-095936764.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/x__J0NssB0eNh6eK6cfJKQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/c835ab20-1400-11ee-beff-d721c00c9f85",
      "publishedAt": "2023-06-26T09:59:36Z",
      "content": "Stock futures pointed to a slightly lower open on Monday, as investors considered what the weekend's short-lived challenge to Putin by armed mercenaries in Russia means for markets.\r\nAfter switching … [+2503 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "author": "Deutsche Welle",
      "title": "Greece election: Conservatives claim resounding victory - DW (English)",
      "description": "Conservative Prime Minister Kyriakos Mitsotakis has won his second election in less than two months. He said his party now has a \"safe majority\" in parliament that will allow it to enact \"major reforms.\"",
      "url": "https://www.dw.com/en/greece-election-conservatives-claim-resounding-victory/a-66023622",
      "urlToImage": "https://static.dw.com/image/66027928_6.jpg",
      "publishedAt": "2023-06-26T09:47:02Z",
      "content": "Greece's conservative New Democracy party (ND) claimed victory at Sunday's parliamentary election, which had been called to break a political deadlock caused by an election last month.\r\nWith 95% of b… [+3125 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Linda Searing",
      "title": "Those with numerous insomnia symptoms at 51 percent higher stroke risk - The Washington Post",
      "description": "Researchers found that the degree of risk for stroke rose as the number of symptoms increased.",
      "url": "https://www.washingtonpost.com/wellness/2023/06/26/insomnia-stroke-risk/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/POFTDISIXFBKPJVPCT7VMSDEAA.jpg&w=1440",
      "publishedAt": "2023-06-26T09:37:35Z",
      "content": "Comment on this story\r\nComment\r\nPeople suffering from insomnia may have as much as a 51 percent greater chance of having a stroke than those who do not have trouble sleeping, according to a study pub… [+1908 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Titan sub implosion: US Coast guard launches investigation into disaster - BBC",
      "description": "It is currently in its initial phase and efforts to recover the wreckage of the sub are ongoing.",
      "url": "https://www.bbc.com/news/66015811",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3412/production/_130203331_f27606cbc8a7c4d4ef427c84f537efd02209b3510_0_3333_22921000x688.jpg",
      "publishedAt": "2023-06-26T09:34:16Z",
      "content": "Media caption, Watch: A definitive timeline of the Titan's last moments\r\nAn investigation into the causes of the Titan submersible disaster has been opened by the US Coast Guard. \r\nChief investigator… [+2114 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "Science X",
      "title": "Humans' evolutionary relatives butchered one another 1.45 million years ago - Phys.org",
      "description": "Researchers from the Smithsonian's National Museum of Natural History have identified the oldest decisive evidence of humans' close evolutionary relatives butchering and likely eating one another.",
      "url": "https://phys.org/news/2023-06-humans-evolutionary-butchered-million-years.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/humans-evolutionary-re.jpg",
      "publishedAt": "2023-06-26T09:31:59Z",
      "content": "Researchers from the Smithsonian's National Museum of Natural History have identified the oldest decisive evidence of humans' close evolutionary relatives butchering and likely eating one another.\r\nI… [+6589 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SamMobile"
      },
      "author": "SamMobile, Asif Iqbal Shaik",
      "title": "Huge Galaxy S23 camera update rolling out in the US and China - SamMobile - Samsung news",
      "description": "Samsung claimed a few weeks ago that it would further improve the camera performance of the Galaxy S23 series with ...",
      "url": "https://www.sammobile.com/news/galaxy-s23-june-2023-camera-update-released-usa-china/",
      "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra-Misty-Lilac-Camera.jpg",
      "publishedAt": "2023-06-26T09:14:00Z",
      "content": "Samsung claimed a few weeks ago that it would further improve the camera performance of the Galaxy S23 series with a software update in June. After delaying the update for a few weeks, the company fi… [+1407 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "STAT"
      },
      "author": "Ed Silverman, Elaine Chen",
      "title": "STAT-Harris Poll: Nearly half of U.S. adults would spend $100 a month for Ozempic, other weight-loss drugs - STAT",
      "description": "Almost half of U.S. adults would be willing to spend up to $100 a month for new obesity drugs, according to a new survey by STAT and @HarrisPoll.",
      "url": "https://www.statnews.com/pharmalot/2023/06/26/obesity-drugs-weight-loss-ozempic-wegovy-cost/",
      "urlToImage": "https://www.statnews.com/wp-content/uploads/2023/06/GettyImages-1482904507-1024x576.jpg",
      "publishedAt": "2023-06-26T08:36:18Z",
      "content": "Almost half of Americans would be willing to spend up to $100 a month for new weight-loss medicines such as Wegovy, and one-third say they would indefinitely pay whatever they can afford to get the d… [+528 chars]"
    }
  ]

  
  constructor() {
    super();
    console.log("This is a constructor");
    
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {  
    return (
      <div className='container my-3'>
        <h1 style={{display : "inline", marginRight : "10px"}}>
          Aaj Tak, Apke Ghar Tak
        </h1>

        <img src='https://upload.wikimedia.org/wikipedia/commons/7/73/Sweta_Singh.jpg' alt="" style={{height : "100px", width : "100px", display : "inline", borderRadius : "100px"}} />



        <div className="row"> 
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/* <NewsItem title={element.title.slice(0, 40) + "..."} description={ (element.description==null ? element.description : element.description.slice(0, 100) + "...")} imageUrl={element.urlToImage} newsUrl = {element.url} /> */}
                <NewsItem title={(element.title.length > 40 ? element.title.slice(0, 40) + "..." : element.title)} description={ (element.description==null) ? (element.description) : (element.description.length>100 ? element.description.slice(0, 100) + "..." : element.description)} imageUrl={element.urlToImage} newsUrl = {element.url} />
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default News