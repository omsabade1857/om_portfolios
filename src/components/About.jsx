import React from 'react';

export const About = () => {
    return (
        <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'>
            <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <div className='text-md text-justify mt-10'>
                    <p>
                        I am an enthusiastic and dedicated student with a strong passion for software engineering. I take great pride in my exceptional academic track record. As a CDAC student, I have consistently excelled in my coursework, maintaining a high GPA and earning recognition for academic achievements. My commitment to learning and my ability to grasp complex concepts have been key factors in my academic success.
                    </p>

                    <p className='mt-5'>
                        Proficient in a range of programming languages including Java, C++, C#, and JavaScript, I am well-versed in data structures, algorithms, and problem-solving. I also have hands-on experience with web development technologies such as Spring, SpringBoot, Hibernate, and ASP.NET. Additionally, I am familiar with Docker, Kubernetes, Git, and database management systems like MySQL, Oracle, PL/SQL, and MongoDB, which I'm eager to apply in real-world projects. I've applied my knowledge and skills to create various software projects, showcasing not only my technical skills but also my ability to work in collaborative teams and adapt to new challenges.
                    </p>
                    
                    <p className='mt-5'>
                        In addition to my academic accomplishments, I have valuable experience working collaboratively in a team setting. I actively participated in an organization within my college, where I contributed to group projects, enhanced my teamwork and communication skills, and successfully collaborated with peers to achieve common goals. This experience has reinforced my ability to work effectively in a team, a skill that I am excited to leverage in a professional software engineering environment.
                    </p>

                    <p className='mt-5'>
                        My commitment to continuous learning and a natural inclination for problem-solving make me an ideal candidate for a software engineering role. I am excited to embark on a career where I can leverage my skills to develop innovative solutions, drive progress, and contribute to a team's success in the ever-evolving tech landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
