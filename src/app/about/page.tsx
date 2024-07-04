const About = () => {
	return (
		<section className="max-w-6xl m-auto flex p-3 flex-col gap-5 py-10">
			<h1 className="font-bold text-2xl">About MovieDB Clone</h1>
			<p>
				Welcome to MovieDB Clone, your ultimate source for all things movies and
				TV shows. This project is a clone of the popular IMDb website, designed
				to provide users with a comprehensive database of films, television
				series, cast and crew information, ratings, reviews, and more.
			</p>

			<h2>Our Mission</h2>
			<p>
				Our mission is to create a user-friendly platform where movie and TV
				enthusiasts can find detailed information about their favorite films and
				series, discover new content, and share their opinions with a community
				of like-minded individuals.
			</p>

			<h2 className="font-bold text-xl">Features</h2>
			<ul>
				<li>Extensive database of movies and TV shows</li>
				<li>Detailed cast and crew information</li>
				<li>User ratings and reviews</li>
				<li>Latest trailers and promotional videos</li>
				<li>Personalized recommendations</li>
			</ul>

			<h2 className="font-bold text-xl">Technologies Used</h2>
			<p>
				Our MovieDB Clone is built using the latest web technologies to ensure a
				fast, responsive, and enjoyable user experience. The key technologies
				used in this project include:
			</p>
			<ul>
				<li>HTML5 and CSS3 for the structure and styling</li>
				<li>
					JavaScript and React.js for dynamic content and user interactions
				</li>
				<li>Node.js and Express for the backend server</li>
				<li>MongoDB for the database</li>
			</ul>

			<h2 className="font-bold text-xl">Meet the Team</h2>
			<p>
				Our team is composed of passionate developers and movie buffs who are
				dedicated to bringing you the best possible experience. We are
				constantly working to improve the site and add new features, so stay
				tuned for updates!
			</p>

			<h2>Contact Us</h2>
			<p>
				If you have any questions, suggestions, or feedback, please don't
				hesitate to <a href="contact.html">contact us</a>. We'd love to hear
				from you!
			</p>
		</section>
	);
};

export default About;
