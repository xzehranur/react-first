import Card from "../components/Card"

const Features = () => {
    return (
      <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">         
                 <Card title={"Create user interfaces from components"} description={"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."} icon={"bi bi-collection"}/>
                 <Card title={"Write components with code and markup"} description={"React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming."} icon={"bi bi-filetype-jsx"}/>
                 <Card title={"Add interactivity wherever you need it"} description={"React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data."} icon={"bi bi-hand-index-thumb"}/>
                 <Card title={"Go full-stack with a framework"} description={"React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix."} icon={"bi bi-code"}/>
                 <Card title={"Use the best from every platform"} description={"People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform."} icon={"bi bi-code-square"}/>
                 <Card title={"Upgrade when the future is ready"} description={"React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy."} icon={"bi bi-code-slash"}/>
                </div>
            </div>
        </section>
    )
  }
  
  export default Features