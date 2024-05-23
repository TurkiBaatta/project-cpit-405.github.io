import React from 'react';
import './style.css'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import City_Weather from './components/City_Weather';
import CurrencyExchange from './components/CurrencyExchange'

function App() {
  return (
    <div>
      <header>
        <div class="nav">
          <div class="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href='#'>Saudi Historical Facts</a></li>
              <li><a href='#'>Top Attractions</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="details2">
        <City_Weather />
      </div>

      <div className="details1">
        <CurrencyExchange />
      </div>

      <section className="home_section">
        <div className="shadow">
          <div>
            <div className="view">
              <h1><span>United</span> Kingdom</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="details1">
        <div>
          <div className="title">
            <h1>Introduction</h1><br />
            <p>The United Kingdom (UK), which is made up of the four countries of England, Scotland, Wales, and
              Northern Ireland, is a prominent entity in Northwestern Europe. The UK is a parliamentary
              democracy
              with a constitutional monarchy and a population of about 66 million people, including its
              capital
              city of London. </p><br /><br /><br /><br /><br />

            <h1>Government and Politics </h1><br />
            <p>The political system of the United Kingdom, a parliamentary democracy and constitutional
              monarchy, is
              a special fusion of modern and traditional rule. The Prime Minister is in charge of the
              government;
              Queen Elizabeth II is the ceremonial head of state. The House of Commons and the House of Lords
              make
              up the UK Parliament, which is based in London and is in charge of passing laws and monitoring
              government operations.</p>
          </div>

        </div>
      </section>

      <section className="details2">
        <div>
          <div className="title">
            <h1>Key Facts</h1><br /><br />
            <table>
              <tr>
                <th>Name</th>
                <th>Flag</th>
                <th>Capital</th>
                <th>Legislature</th>
                <th>Executive</th>
                <th>Legal systems</th>
                <th>Jurisdiction</th>
              </tr>
              <tr>
                <td>England</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/105px-Flag_of_England.svg.png"
                  alt='a' style={{ width: "50%" }} /></td>
                <td>London</td>
                <td>None</td>
                <td>None</td>
                <td>English law</td>
                <td>England and Wales</td>
              </tr>
              <tr>
                <td>Northern Ireland</td>
                <td>None</td>
                <td>Belfast</td>
                <td>Northern Ireland Assembly</td>
                <td>Northern Ireland Executive</td>
                <td>Northern Ireland law, Irish land law</td>
                <td>Northern Ireland</td>
              </tr>
              <tr>
                <td>Scotland</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/105px-Flag_of_Scotland.svg.png"
                  alt='a' style={{ width: "50%" }} /></td>
                <td>Edinburgh</td>
                <td>Scottish Parliament</td>
                <td>Scottish Government</td>
                <td>Scots law</td>
                <td>Scotland</td>
              </tr>
              <tr>
                <td>Wales</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/105px-Flag_of_Wales.svg.png"
                  alt='a' style={{ width: "50%" }} /></td>
                <td>Cardiff</td>
                <td>Senedd</td>
                <td>Welsh Government</td>
                <td>English law, Welsh law</td>
                <td>England and Wales</td>
              </tr>
              <tr>
                <td>United Kingdom</td>
                <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/105px-Flag_of_the_United_Kingdom.svg.png"
                  alt='a' style={{ width: "50%" }} /></td>
                <td>London</td>
                <td>UK Parliament</td>
                <td>UK Government</td>
                <td>UK law</td>
                <td>United Kingdom</td>
              </tr>
            </table>
          </div>

        </div>
      </section>

      <section className="details1">
        <div>
          <div className="title">
            <h1>Places</h1><br />
            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/big-ben.jpg"
                alt="Big Ben" style={{ width: "100%" }} />
              <div>
                <p>Big Ben</p>
              </div>
            </div>

            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/london-eye.jpg"
                alt="London Eye" style={{ width: "100%" }} />
              <div>
                <p>London Eye</p>
              </div>
            </div>

            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/stonehenge.jpg"
                alt="Stonehenge" style={{ width: "100%" }} />
              <div>
                <p>Stonehenge</p>
              </div>
            </div>

            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/hyde-park.jpg"
                alt="Hyde Park" style={{ width: "100%" }} />
              <div>
                <p>Hyde Park</p>
              </div>
            </div>

            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/dulnuce-castle.jpg"
                alt="Dunluce Castle" style={{ width: "100%" }} />
              <div>
                <p>Dunluce Castle</p>
              </div>
            </div>

            <div className="polaroid">
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/giants-causeway.jpg"
                alt="Giant’s Causeway" style={{ width: "100%" }} />
              <div>
                <p>Giant’s Causeway</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer>
        <p>&copy; 2024 Turki Baatta & Amer AL-Thagafi</p>
        <p>CPIT-405</p>
      </footer>
    </div>
  );
}

export default App;