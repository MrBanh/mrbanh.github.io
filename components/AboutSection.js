const AboutSection = () => {
	return (
		<section id="about" className="
		min-h-section
		pt-section
		">
			{/* Title */}
			<h2 className="
			text-4xl
			p-4
			text-center
			bg-clip-text
			bg-gradient-to-r from-teal-400 to-blue-600
			text-transparent
			">
				About Me
			</h2>

			{/* About Content */}
			<div>
				<div>
					{/* Background */}
					<div>
						<h3>Background</h3>

						<div>
							<p>
								My name is Tony, and I am a senior at Fort Hays
								State University pursuing a B.S. Computer
								Science. I also hold a BS in Accounting from
								SJSU. I have 5+ years of professional experience
								working in the accounting field as a Financial
								Controller/Senior Accountant for small
								start-ups. I have been coding as a hobby for the
								past few years, building a few projects in
								Python, JavaScript, Node.js, and React. In 2020,
								I decided to seriously pursue software
								engineering.
							</p>
							<br />
							<p>
								In my free time, I find joy in learning new
								technologies (thank you Brad Traversy and Net
								Ninja!). I also enjoy bowling, board/video
								games, and spending time with my wife.
							</p>
						</div>
					</div>

					{/* Experience */}
					<div>
						<h3>Experience</h3>
						<ul>
							<li>
								<h4>Aesthetx | Financial Controller</h4>
								<p>Aug 2017 - Sep 2020</p>
							</li>
							<li>
								<h4>
									Benchmark Solutions, Inc. | Senior
									Accountant
								</h4>
								<p>Sep 2013 - May 2019</p>
							</li>
							<li>
								<h4>IMD Path, Inc. | Corporate Controller</h4>
								<p>Aug 2016 - Feb 2017</p>
							</li>
						</ul>
					</div>

					{/* Education */}
					<div>
						<h3>Education</h3>
						<ul>
							<li>
								<h4>
									Fort Hays State University | BS, Computer
									Science
								</h4>
								<p>4.000 GPA</p>
							</li>
							<li>
								<h4>
									San Jose State University | BS, Accounting
								</h4>
								<p>3.960 GPA</p>
							</li>
						</ul>
					</div>

					{/* Skills */}
					<div>
						<h3>Skills</h3>
						<ul>
							<li>
								<p></p>
								<p>HTML</p>
							</li>
							<li>
								<p></p>
								<p>CSS</p>
							</li>
							<li>
								<p></p>
								<p>JavaScript</p>
							</li>
							<li>
								<p></p>
								<p>Python</p>
							</li>
							<li>
								<p></p>
								<p>C/C++</p>
							</li>
							<li>
								<p></p>
								<p>React.js</p>
							</li>
							<li>
								<p></p>
								<p>Next.js</p>
							</li>
							<li>
								<p></p>
								<p>MongoDB</p>
							</li>
							<li>
								<p></p>
								<p>Node.js / NPM</p>
							</li>
							<li>
								<p></p>
								<p>Express.js</p>
							</li>
							<li>
								<p></p>
								<p>Tailwind CSS</p>
							</li>
							<li>
								<p></p>
								<p>SCSS / SASS</p>
							</li>
							<li>
								<p></p>
								<p>Git, Github</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
