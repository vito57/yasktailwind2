export default function Page() {
  return (
    <div className="container my-10">
      <header role="banner">
        <h1 className="h1">YASKWORK</h1>
        <small>
          Jump to:{" "}
          <a href="#headings" className="ylink">
            Headings
          </a>{" "}
          |{" "}
          <a href="#sections" className="ylink">
            Sections
          </a>{" "}
          |{" "}
          <a href="#phrasing" className="ylink">
            Phrasing
          </a>{" "}
          |{" "}
          <a href="#palpable" className="ylink">
            Palpable Content
          </a>{" "}
          |{" "}
          <a href="#embeds" className="ylink">
            Embeds
          </a>{" "}
          |{" "}
          <a href="#forms" className="ylink">
            Forms
          </a>{" "}
          |{" "}
          <a href="#tables" className="ylink">
            Tables
          </a>
        </small>
        <br />
        <br />
        <p>
          This section seves as the <code>header</code>.
        </p>
      </header>
      <br />
      <hr />
      <br />
      <main className=" md:text-xl">
        <section id="fonts">
          <h3 className="h3">
            <a href="#fonts" className="ylink">
              #
            </a>{" "}
            <span>Fonts</span>
          </h3>
          <br />
          <p className="">
            <span>font-sans: Inter</span>
            <br />
            <span className="font-mono">font-mono:JetBrains Mono</span>
            <br />
            <span className="font-display">font-display: Serotiva</span>
          </p>
        </section>
        <br />
        <hr />
        <br />
        <section id="headings">
          <h3 className="h3">
            <a href="#headings" className="ylink">
              #
            </a>{" "}
            <span> Headings</span>
          </h3>
          <br />
          <p>
            Elements <code>h1</code>, <code>h2</code>, <code>h3</code>,
            <code>h4</code>, <code>h5</code>, <code>h6</code> make up the{" "}
            <em>heading content</em> category.
          </p>
          <br />
          <hgroup>
            <h1 className="h1">
              h1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              omnis debitis et id? Molestias, dolorem aliquid! Magni doloribus
              officia itaque vel modi, laborum porro repudiandae cum sed
              explicabo, at officiis.
            </p>
            <br />
            <h2 className="h2">
              h2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veniam saepe deserunt assumenda cum velit quaerat eos, est beatae
              corrupti, dolores asperiores alias officia nostrum. Cupiditate
              officiis libero excepturi voluptatem aliquid.
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ipsum quibusdam odio nisi placeat tempore, quaerat
              excepturi et vel nostrum nemo mollitia dicta molestiae, expedita
              neque blanditiis explicabo, veniam est.
            </p>
            <br />
            <h3 className="h3">
              h3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Labore iste saepe quidem sapiente, delectus iure dolorum rem
              commodi enim porro adipisci odio illum est incidunt eius quas hic
              et fugit!
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              culpa quam tempore ipsa nihil voluptates porro earum at omnis
              tenetur a accusamus, suscipit, quibusdam voluptate dolores? Cum
              natus itaque corporis?
            </p>
            <br />
            <h4 className="h4">
              h4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              nemo doloremque dignissimos at quia dolor quisquam, esse deserunt,
              perferendis dicta reiciendis voluptatem! Tempore sapiente nihil
              voluptate natus, a ipsam obcaecati!
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto exercitationem animi laudantium nam est error, id,
              asperiores, rerum eos qui ut sit ullam beatae optio pariatur?
              Quisquam in explicabo ea.
            </p>
            <br />
            <h5 className="h5">
              h5. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolores vitae rerum odit vel soluta nemo error, fugiat tempore
              corrupti, voluptate neque molestiae impedit! At magnam magni
              reprehenderit deserunt similique nostrum?
            </h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur, odio consequuntur. Ullam quo fugiat vel minus
              recusandae culpa saepe excepturi enim, eaque rerum hic distinctio
              atque similique nobis ratione modi?
            </p>
            <br />
            <h6 className="h6">
              h6. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur explicabo doloribus magnam magni, molestias ducimus?
              Aut deserunt voluptate tempore sed, eum corporis temporibus
              deleniti a expedita, hic repellat. Magni, cumque!
            </h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              inventore assumenda quis pariatur quasi sed suscipit corrupti!
              Quis, unde ea, consectetur aliquid minus alias nobis,
              reprehenderit a odio perspiciatis similique!
            </p>
            <br />
          </hgroup>
          <br />
          <footer>
            <p>
              See the{" "}
              <a
                target="_blank"
                className="ylink"
                href="https://www.w3.org/TR/html5/dom.html#heading-content"
              >
                Heading Content spec.
              </a>
            </p>
            <p>
              Note: these two paragraphs are contained in a <code>footer</code>{" "}
              element.
            </p>
          </footer>
        </section>
        <br />
        <hr />
        <br />
        <section id="sections">
          <header>
            <h3 className="h3">
              <a href="#sections" className="ylink">
                #
              </a>{" "}
              Sections
            </h3>
            <br />
            <p className=" ">
              Elements <code>article</code>, <code>aside</code>,{" "}
              <code>nav</code>,<code>section</code> make up the
              <em>sectioning content</em> category.
            </p>
          </header>
          <article>
            <p className="">
              This paragraph is nested inside an <code>article</code> element.
              It contains many different, sometimes useful,{" "}
              <a className="ylink" href="http://www.w3schools.com/tags/">
                HTML5 elements
              </a>
              . Of course there are classics like <em>emphasis</em>,{" "}
              <strong>strong</strong>, and <small>small</small> but there are
              many others as well. Hover the following text for abbreviation
              element:
              <abbr title="abbreviation">abbr</abbr>. You can define{" "}
              <del>deleted text</del> which often gets replaced with{" "}
              <ins>inserted</ins> text.
            </p>
            <br />
            <p className="">
              You can also use <kbd>keyboard text</kbd>, which sometimes is
              styled similarly to the <code>&lt;code&gt;</code> or{" "}
              <samp>samp</samp> elements. Even more specifically, there is an
              element just for <var>variables</var>. Not to be mistaken with
              block quotes below, the quote element lets you denote something as
              <q>quoted text</q>. Lastly dont forget the sub (H<sub>2</sub>O)
              and sup (E = MC<sup>2</sup>) elements.
            </p>
            <br />
            <section>
              <p className="">
                This paragraph is contained in a <code>section</code> element of
                its parent <code>article</code> element.
              </p>
              <p className="">
                ↓ The following paragraph has the <code>hidden</code> attribute
                and should not be displayed. ↓
              </p>
              <p hidden>→ You should not see this paragraph. ←</p>
              <p className="">
                ↑ The previous paragraph should not be displayed. ↑
              </p>
            </section>
          </article>
          <aside>
            <p className="">
              This is contained in an <code>aside</code> element.
            </p>
          </aside>
          <footer>
            <p className="">
              See the
              <a
                target="_blank"
                className="ylink"
                href="https://www.w3.org/TR/html5/dom.html#sectioning-content"
              >
                Sectioning Content spec.
              </a>
            </p>
          </footer>
        </section>
        <br />
        <hr />
        <br />
        <section id="phrasing">
          <header>
            <h3 className="h3">
              <a href="#phrasing">#</a> Phrasing
            </h3>
            <br />
            <p className="">
              Elements <code>abbr</code>, <code>b</code>, <code>bdi</code>,
              <code>bdo</code>, <code>br</code>, <code>cite</code>,
              <code>code</code>, <code>data</code>, <code>del</code>,
              <code>dfn</code>, <code>em</code>, <code>i</code>,{" "}
              <code>ins</code>,<code>kbd</code>, <code>mark</code>,{" "}
              <code>meter</code>,<code>progress</code>, <code>q</code>,{" "}
              <code>s</code>,<code>samp</code>, <code>small</code>,{" "}
              <code>span</code>,<code>strong</code>, <code>sub</code>,{" "}
              <code>sup</code>,<code>time</code>, <code>u</code>,{" "}
              <code>var</code>,<code>wbr</code>, and others make up the{" "}
              <em>phrasing content</em> category.
            </p>
          </header>
          <br />
          <p className="">
            <code>abbr</code>: Some vehicles meet the{" "}
            <abbr title="Super Ultra Low Emission Vehicle">SULEV</abbr>{" "}
            standard.
          </p>
          <br />
          <p className="">
            <code>em</code> is used for <em>emphasis</em> and usually renders as
            italics, contrast that with <code>i</code> which is used for
            alternate voice or to offset from the normal (such as a phrase from
            a different language or taxonomic designation): <i>E. coli</i> can
            be bad. <code>strong</code> is used for{" "}
            <strong>importance or urgency</strong> and usually renders as bold,
            contrast that with <code>b</code> which is used to
            <b>draw attention</b> without the semantic meaning of importance.
          </p>
          <br />
          <p className="">
            <code>cite</code>: In the words of <cite>Charles Bukowski</cite> —
            <q>
              An intellectual says a simple thing in a hard way. An artist says
              a hard thing in a simple way.
            </q>
          </p>
          <br />
          <p className="">
            <code>data</code> can be used to specify{" "}
            <data value="2018-09-24T05:00-07:00">
              5 <sup>A.M.</sup>
            </data>{" "}
            that is machine-readable, but <code>time</code> is a better choice
            for specifying{" "}
            <time dateTime="2018-09-24T05:00-07:00">
              5 <sup>A.M.</sup>
            </time>{" "}
            in a machine-readable format.
          </p>
          <br />
          <p className="">
            <code>del</code> can be{" "}
            <del dateTime="2017-10-11T01:25-07:00">varily</del> used to mark
            deletions. <code>ins</code> marks{" "}
            <ins dateTime="2007-12-19 00:00Z">insertions</ins>. <code>s</code>:
            similar to <code>del</code>, but used to mark content that is no
            longer relevant. <s>Windows XP version available.</s> <code>u</code>
            : a holdover with no real meaning that should be <u>removed</u>.
            <code>mark</code>: the HTML equivalent of the{" "}
            <mark>yellow highlighter</mark>. <code>span</code>: a
            <span>generic element</span> with no meaning by itself.
          </p>
          <br />
          <p className="">
            <code>dfn</code>: Foreign phrases add a certain{" "}
            <dfn lang="fr" title="French: indefinable quality">
              je ne sais quoi
            </dfn>{" "}
            to ones prose.
          </p>
          <br />
          <p className="">
            <code>q</code>: The W3C page{" "}
            <cite className="text-bold leading-1.5">About W3C</cite> says the
            W3C’s mission is
            <q cite="https://www.w3.org/Consortium/">
              To lead the World Wide Web to its full potential by developing
              protocols and guidelines that ensure long-term growth for the Web
            </q>
            .
          </p>
          <br />
          <code>kbd</code> and <code>samp</code>: I did this:
          <samp>
            c:\&gt;<kbd>format c: /yes</kbd>
          </samp>
          <p className="">
            Is that bad? Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> for a hard reload.
          </p>
          <br />
          <p className="">
            <code>var</code>: To log in, type{" "}
            <kbd>
              ssh <var>user</var> @example.com
            </kbd>
            , where <var>user</var> is your user ID.
          </p>
          <br />
          <p className="">
            <code>meter</code> and <code>progress</code>:
            <br />
            <label htmlFor="fuelLow">Low:</label>{" "}
            <meter
              id="fuelLow"
              min="0"
              max="100"
              low={33}
              high={60}
              optimum={80}
              value="20"
            >
              at 50/100
            </meter>{" "}
            <br />
            <label htmlFor="fuelMedium">Medium:</label>{" "}
            <meter
              id="fueMedium"
              min="0"
              max="100"
              low={33}
              high={60}
              optimum={80}
              value="50"
            >
              at 50/100
            </meter>{" "}
            <br />
            <label htmlFor="fuelLarge">Max:</label>{" "}
            <meter
              id="fueLarge"
              min="0"
              max="100"
              low={33}
              high={60}
              optimum={80}
              value="87"
            >
              at 50/100
            </meter>{" "}
            <br />
            Progress:{" "}
            <progress value="57" max="100">
              37%
            </progress>
          </p>
          <br />
          <p>
            <q>
              I wrote this whole document.
              <small>[Editors note: no he did not]</small>
            </q>
          </p>
          <footer>
            <p>
              See the
              <a
                target="_blank"
                href="https://www.w3.org/TR/html5/dom.html#phrasing-content"
              >
                Phrasing Content spec.
              </a>
            </p>
          </footer>
        </section>
        <br />
        <hr />
        <br />
        <section id="palpable">
          <header>
            <h3 className="h3">
              <a href="#palpable">#</a> Palpable Content
            </h3>
            <p className="">
              Elements <code>a</code>, <code>address</code>,
              <code>blockquote</code>, <code>button</code>, <code>details</code>
              ,<code>dl</code>, <code>fieldset</code>, <code>figure</code>,
              <code>form</code>, <code>input</code>, <code>label</code>,
              <code>map</code>, <code>ol</code>, <code>output</code>,
              <code>pre</code>, <code>select</code>, <code>table</code>,
              <code>textarea</code>, <code>ul</code>, and others make up the
              <em>palpable content</em> category.
            </p>
          </header>
          <br />
          <p className="">
            <code>a</code>:{" "}
            <a className="ylink" href="http://example.com">
              Example
            </a>
            .
          </p>
          <br />
          <p className="">
            <code>address</code>:
          </p>
          <address className="">
            1 Infinite Loop
            <br />
            Cupertino, CA 95014
            <br />
            United States
          </address>
          <br />
          <p>
            <code>blockquote</code>:
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero,
            ipsam illo nostrum necessitatibus sapiente pariatur unde repudiandae
            quas quisquam omnis sit nesciunt fugiat vero voluptates est
            consequuntur quia ullam!
          </p>
          <br />
          <blockquote>
            <p>I quickly explained that many big jobs involve few hazards</p>
          </blockquote>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            dolorum officiis animi quod voluptas obcaecati sunt atque veniam
            corporis similique aspernatur, voluptatibus, porro assumenda soluta
            veritatis doloribus exercitationem quasi libero!
          </p>
          <br />
          <blockquote className="">
            <p>
              This is a mult-line blockquote with a cite reference. People think
              focus means saying yes to the thing you’ve got to focus on. But
              that’s not what it means at all. It means saying no to the hundred
              other good ideas that there are. You have to pick carefully. I’m
              actually as proud of the things we haven’tdone as the things I
              have done. Innovation is saying no to 1,000 things.
            </p>

            <footer>
              <em> Steve Jobs,</em>{" "}
              <cite>Apple Worldwide Developers’ Conference, 1997</cite>
            </footer>
          </blockquote>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            ipsam adipisci eum, porro vero natus dolorum rem accusantium?
            Assumenda quo non harum omnis facere iste rem vero est recusandae
            cumque!
          </p>
          <br />
          <p>
            <code>details</code> and <code>summary</code>:
          </p>
          <br />
          <details>
            <summary>
              Loading: <progress max="375505392" value="97543282"></progress>{" "}
              25%
            </summary>
            <dl>
              <dt>Transfer rate:</dt>
              <dd>452KB/s</dd>
              <dt>Duration:</dt>
              <dd>01:16:27</dd>
              <dt>Color profile:</dt>
              <dd>SD (6-1-6)</dd>
              <dt>Dimensions:</dt>
              <dd>320×240</dd>
            </dl>
          </details>
          <details>
            <summary>More</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              similique earum temporibus harum beatae neque voluptatum eius sint
              excepturi, adipisci optio reiciendis aut eligendi veniam totam
              natus itaque consequatur minima.
            </p>
          </details>
          <br />
          <p>
            <code>dl</code>:
          </p>
          <dl>
            <dt>Definition List Title</dt>
            <dd>Definition list division.</dd>
            <dt>Kitchen Sink</dt>
            <dd>
              Used in expressions to describe work in which all conceivable (and
              some inconceivable) sources have been mined. In this case, a bunch
              of markup.
            </dd>
            <dt>aside</dt>
            <dd>Defines content aside from the page content</dd>
            <dt>blockquote</dt>
            <dd>Defines a section that is quoted from another source</dd>
          </dl>
          <br />
          <p>
            <code>figure</code>:
          </p>
          <figure>
            <img src="/works/aides/aides-start.png" alt="s" />
            <figcaption>
              Figure 1: A picture of Bill Murray from{" "}
              <a className="ylink" href="yask.work">
                yask.work
              </a>
            </figcaption>
          </figure>
          <br />

          <h4 id="forms" className="h4">
            <a href="#forms">#</a> Forms
          </h4>

          <br />
          <form>
            <p>
              <label htmlFor="example-input-email" className="text-base">
                Email address
              </label>

              <input
                type="email"
                placeholder="vito@yask.work"
                id="example-input-email"
              />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-number">Number</label>
              <input type="number" id="example-input-number" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-password">Password</label>
              <input type="password" id="example-input-password" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-search">Search</label>
              <input type="search" id="example-input-search" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-tel">Telephone number</label>
              <input type="tel" id="example-input-tel" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-text">Text</label>
              <input type="text" id="example-input-text" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-readonly">Read-only</label>
              <input type="text" readOnly value="Can't touch this!" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-disabled">Disabled</label>
              <input
                type="text"
                placeholder="disabled"
                disabled
                value="Not available"
              />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-url">URL</label>
              <input type="url" id="example-input-url" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-color">Color</label>
              <input type="color" id="example-input-color" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-date">Date</label>
              <input type="date" id="example-input-date" />
            </p>
            <br />

            <p>
              <label htmlFor="example-input-date-time">Date / Time</label>
              <input type="datetime" id="example-input-date-time" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-date-time-local">
                Date / Time local
              </label>
              <input type="datetime-local" id="example-input-date-time-local" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-month">Month</label>
              <input type="month" id="example-input-month" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-week">Week</label>
              <input type="week" id="example-input-week" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-time">Time</label>
              <input type="time" id="example-input-time" />
            </p>
            <br />
            <p>
              <label htmlFor="example-input-file">File input</label>
              <input type="file" id="example-input-file" />
            </p>
            <br />
            {/* <p>
              <label htmlFor="example-input-range">Range input</label>
              <input
                type="range"
                id="example-input-range"
                min="1"
                max="4"
                value="3"
              />
            </p>
            <br /> */}
            <p>
              <label htmlFor="example-select1">Select</label>
              <select id="example-select1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-select1a">Select with size</label>
              <select id="example-select1a" size={2}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-select2">Multiple select</label>
              <select multiple id="example-select2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-optgroup">
                Select with optgroup: Favorite Car
              </label>
              <select id="example-optgroup">
                <optgroup label="Swedish Cars">
                  <option>Volvo</option>
                  <option>Saab</option>
                </optgroup>
                <optgroup label="German Cars">
                  <option>Mercedes</option>
                  <option>Audi</option>
                </optgroup>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-optgroup2">
                Select with optgroup and size:Favorite Dish
              </label>
              <select id="example-optgroup2" size={2}>
                <optgroup label="Vegetarian">
                  <option>Green Salad</option>
                  <option>French Fries</option>
                </optgroup>
                <optgroup label="Carnivorous">
                  <option>Big Mac</option>
                  <option>Roast Beef</option>
                </optgroup>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-optgroup3">
                Multiple select with optgroup: Public transport
              </label>
              <select id="example-optgroup3" multiple>
                <optgroup label="Ground">
                  <option>Train</option>
                  <option>Bus</option>
                </optgroup>
                <optgroup label="Water">
                  <option>Ship</option>
                  <option>Submarine</option>
                </optgroup>
                <optgroup label="Air">
                  <option>Plane</option>
                  <option>Balloon</option>
                </optgroup>
              </select>
            </p>
            <br />
            <p>
              <label htmlFor="example-textarea">Textarea</label>
              <textarea id="example-textarea" rows={3}></textarea>
            </p>
            <br />
            <fieldset>
              <legend>I am legend</legend>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="option-radio"
                  id="option-radio1"
                  value="option1"
                />
                <label htmlFor="option-radio1">
                  Option one is this and that&mdash;be sure to include why its
                  great
                </label>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="option-radio"
                  id="option-radio2"
                  value="option2"
                />
                <label>
                  Option two can be something else and selecting it will
                  deselect option one
                </label>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="radio"
                  name="option-radio"
                  id="option-radio3"
                  value="option3"
                  disabled
                />
                <label>Option three is disabled</label>
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend>I am also legend</legend>
              <div className="flex gap-2 items-center ">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">Check me out</label>
              </div>
              <div className="flex gap-2 items-center ">
                <input type="checkbox" id="checkbox2" />
                <label htmlFor="checkbox2">and/or check me out</label>
              </div>
            </fieldset>
            <br />
            <p>
              <button type="button" name="button">
                Button
              </button>
              <input type="button" name="input" value="Input Button" />
              <input type="submit" name="submit" value="Input Submit" />
              <button type="submit" name="submit2">
                Submit
              </button>
              <input type="reset" name="reset" value="Input Reset" />
              <button type="reset" name="reset2">
                Reset
              </button>
              <button disabled>Cancel</button>
            </p>
          </form>
          <p>
            <code>ul</code> and <code>ol</code>:
          </p>
          <ul>
            <li>
              Unordered List item one
              <ul>
                <li>
                  Nested list item
                  <ul>
                    <li>Level 3, item one</li>
                    <li>Level 3, item two</li>
                    <li>Level 3, item three</li>
                    <li>Level 3, item four</li>
                  </ul>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ul>
          <ol>
            <li>
              List item one
              <ol>
                <li>
                  List item one
                  <ol>
                    <li>List item one</li>
                    <li>List item two</li>
                    <li>List item three</li>
                    <li>List item four</li>
                  </ol>
                </li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
          <p>
            <code>output</code>:
          </p>
          <form>
            <input name="a" type="number" step="any" /> +
            <input name="b" type="number" step="any" /> =
            <output name="o" htmlFor="a b"></output>
          </form>
          <p>
            <code>pre</code>:
          </p>
          {/* <pre>
            display: block; padding: 7px; background-color: #F5F5F5; border: 1px
            solid #E1E1E8; border-radius: 3px; white-space: pre-wrap;
            word-break: break-all; font-family: Menlo, Monaco; line-height:
            160%;
          </pre> */}
          {/* <pre>
            <samp>
              You are in an open field west of a big white house with a boarded
              front door. There is a small mailbox here.
            </samp>{" "}
            <kbd>open mailbox</kbd>
            <samp>Opening the mailbox reveals: A leaflet.</samp>
          </pre> */}
          <br />

          <h4 id="tables">
            <a href="#tables">#</a> Tables
          </h4>
          <hr />
          <table>
            <caption>Tables can have captions now.</caption>
            <tbody>
              <tr>
                <th>Person</th>
                <th>Number</th>
                <th>Third Column</th>
              </tr>
              <tr>
                <td>Someone Lastname</td>
                <td>900</td>
                <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Person Name</a>
                </td>
                <td>1200</td>
                <td>
                  Vestibulum id ligula porta felis euismod semper. Donec
                  ullamcorper nulla non metus auctor fringilla.
                </td>
              </tr>
              <tr>
                <td>Another Person</td>
                <td>1500</td>
                <td>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </td>
              </tr>
              <tr>
                <td>Last One</td>
                <td>2800</td>
                <td>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Cras mattis consectetur purus sit amet fermentum.
                </td>
              </tr>
            </tbody>
          </table>
          <p id="table-summary">
            In the following table, characteristics are given in the second
            column, with the negative side in the left column and the positive
            side in the right column.
          </p>
          <table aria-describedby="table-summary">
            <caption>Characteristics with positive and negative sides</caption>
            <thead>
              <tr>
                <th id="n">Negative</th>
                <th>Characteristic</th>
                <th id="p">Positive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td headers="n r1">Sad</td>
                <th id="r1">Mood</th>
                <td headers="p r1">Happy</td>
              </tr>
              <tr>
                <td headers="n r2">Failing</td>
                <th id="r2">Grade</th>
                <td headers="p r2">Passing</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>
              Complex table with a<code>thead</code>, multiple
              <code>tbody</code>
              elements, and a<code>tfoot</code>.
            </caption>
            <thead>
              <tr>
                <th></th>
                <th>2008</th>
                <th>2007</th>
                <th>2006</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Net sales</th>
                <td>$32,479</td>
                <td>$24,006</td>
                <td>$19,315</td>
              </tr>
              <tr>
                <th>Cost of sales</th>
                <td>21,334</td>
                <td>15,852</td>
                <td>13,717</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Gross margin</th>
                <td>$11,145</td>
                <td>$8,154</td>
                <td>$5,598</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Gross margin percentage</th>
                <td>34.3%</td>
                <td>34.0%</td>
                <td>29.0%</td>
              </tr>
            </tfoot>
          </table>
          <footer>
            <p>
              See the
              <a
                target="_blank"
                href="https://www.w3.org/TR/html5/dom.html#palpable-content"
              >
                Palpable Content spec.
              </a>
            </p>
          </footer>
        </section>
        <hr />
        <section id="embeds">
          <header>
            <h3>
              <a href="#embeds">#</a> Embeds
            </h3>
            <p>
              Elements <code>audio</code>, <code>canvas</code>,
              <code>embed</code>, <code>iframe</code>, <code>img</code>,
              <code>math</code>, <code>object</code>, <code>picture</code>,
              <code>svg</code>, <code>video</code> make up the
              <em>embedded content</em> category.
            </p>
          </header>
          <p>
            <code>audio</code>:
            <audio
              controls
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/What_hath_God_wrought.ogg"
            ></audio>
            By Cqdx [
            <a href="https://creativecommons.org/licenses/by-sa/3.0">
              CC BY-SA 3.0{" "}
            </a>
            ],
            <a href="https://commons.wikimedia.org/wiki/File:What_hath_God_wrought.ogg">
              from Wikimedia Commons
            </a>
            .
          </p>
          <p>
            <code>iframe</code>:
            <iframe
              srcDoc="<h1>Sample Document</h1><p>This
is a sample content.</p>"
            ></iframe>
          </p>
          <p>
            <code>img</code>:
            <img src="https://www.fillmurray.com/150/150" alt="Bill Murray" />
          </p>
          <p>
            <code>math</code>:
          </p>
          {/* <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mtable>
            <mtr>
              <mtd>
                <mtext>Quadratic Equation</mtext>
              </mtd>
              <mtd>
                <mrow>
                  <mi>x</mi>
                  <mo>=</mo>
                  <mfrac>
                    <mrow>
                      <mo>-</mo>
                      <mi>b</mi>
                      <mo>&#x00B1;</mo>
                      <msqrt>
                        <mrow>
                          <msubsup>
                            <mi>b</mi>
                            <mrow></mrow>
                            <mn>2</mn>
                          </msubsup>
                          <mo>-</mo>
                          <mn>4</mn>
                          <mi>a</mi>
                          <mi>c</mi>
                        </mrow>
                      </msqrt>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                </mrow>
              </mtd>
            </mtr>
          </mtable>
        </math> */}
          <p>
            <code>picture</code>:
            <picture>
              <source
                srcSet="
                https://www.fillmurray.com/240/300 2x,
                https://www.fillmurray.com/120/150 1x
              "
              />
              <img src="https://www.fillmurray.com/120/150" alt="Bill Murray" />
            </picture>
          </p>
          <p>
            <code>svg</code>:
            <svg
              role="presentation"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.199 24C19.199 13.467
10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291
17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301
3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909
24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909
7.184 15.909 15.91z"
              />
            </svg>
          </p>
          <p>
            <code>video</code>:
            <video
              controls
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Dwarf_hamsters_running_on_disc_2.ogv"
            ></video>
          </p>
          <footer>
            <p>
              See the
              <a
                target="_blank"
                href="https://www.w3.org/TR/html5/dom.html#embedded-content"
              >
                Embedded Content spec.
              </a>
            </p>
          </footer>
        </section>
        <hr />
      </main>
      <footer role="contentinfo">
        <p>
          Find this document on
          <a href="https://github.com/dbox/html5-kitchen-sink">GitHub</a>.
        </p>
      </footer>
    </div>
  );
}
