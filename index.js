//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "/session5-takehome/avataaars/annakendrick.svg",
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "/session5-takehome/avataaars/harryfn.svg",
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "/session5-takehome/avataaars/sofiasul.svg",
    },
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");
  
  /**
   * Creates and img HTML element with given src and alt
   * @param {string} src - Source for image
   * @param {string} alt - Alt text for image
   * @returns An Image HTML Element
   */
  const getImageElement = (src, alt) => {
    let image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    return image;
  };
  
  /**
   * Creates a new card with passed parameters.
   * @param {string} id - Unique id from team data
   * @param {string} fullName - Name of the team member
   * @param {string} jobTitle - Job title of the team memeber
   * @param {string} bio - Description Bio
   * @param {string} avatar - Source of the avatar image.
   * @returns section HTML element with Image and Text
   */
  function generateCard(id, fullName, jobTitle, bio, avatar) {
    //1. Create a new "section" element and set the className and id
    let section = document.createElement("section");
    section.className = "team-member";
    section.id = `${id}`;
    //2. Generate the image using getImageElement() function
    //Hint - Use fullname as alt for the image.
    let image = getImageElement(avatar, fullName);
    image.style.height = "100px";
    image.style.width = "100px";
    //3. Create a div for text content
    let div = document.createElement("div");
    //4. Create an h2 for fullName
    let h2 = document.createElement("h2");
    h2.textContent = `${fullName}`;
    //5. Create an h3 for jobTitle
    let h3 = document.createElement("h3");
    h3.textContent = `${jobTitle}`;
    //6. Create a p for bio
    let p = document.createElement("p");
    p.textContent = `${bio}`;
    //7. Append the fullName, jobTitle, and bio element
    //   to the div created for text.
    div.append(h2, h3, p);
    //8. Append the Image and the Text div
    //   to the new section you created in step 1
    section.append(image, div);
    //Return the new section element created.
    return section;
  }
  
  /**
   * Generates and returns an array of HTML elements
   * @param {Array} data Team data array
   */
  function generateCardArray(data) {
    const cards = [];
    //Add logic to populate `cards` array below
    //Return cards array
    for (const member of data) {
      // Generate a card for the current team member and push it into the cards array
      const card = generateCard(
        member.id,
        member.fullName,
        member.jobTitle,
        member.bio,
        member.avatar
      );
      cards.push(card);
    }
    return cards;
  }
  
  const cardsArray = generateCardArray(team);
  
  //Run a loop for the cardsArray and append its elements to content.
  for (let card of cardsArray) {
    content.append(card);
  }
  //Modify Code above this line
  console.log(content);
  