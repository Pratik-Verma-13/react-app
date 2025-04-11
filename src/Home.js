import nssc from "./images/nssc-bg.png"

const Home = () => {
    const about = "The National Students' Space Challenge (NSSC) is the centrepiece of spAts. As the name suggests, NSSC is a national-level fest dedicated solely towards space and space technology. The fest began in 2011 when the society decided to independently host a fest to provide a platform to the aspiring engineers and scientists of India who were only waiting for an opportunity to showcase their talents. In its inaugural year, NSSC had just one event: Liftoff. The event, a competition to build the best water rocket with given specifications, spoke to the hearts of space enthusiasts and remained the fest's highlight after 11 long years. Various other events, such as autonomous and manual bot-making, space quizzes, case studies and astrophotography, have been added over the years. Besides the events, the National Students' Space Challenge is famous for its supremely successful guest lectures, exhibitions and workshops."

    return ( 
        <div className="homepage">
            <div className="design-logo">
                <img src={nssc} alt="NSSC logo" />
            </div>
            <div className="about">
               
                <p>{about}</p>
            </div>
        </div>
    );
}
 
export default Home;