/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
  let line = textarea.value.split('\n').length

  if(textarea.rows < 6 || line < 6) {
    textarea.rows = line
  }

  if(textarea.rows > 1) {
    chatboxForm.style.alignItems = 'flex-end'
  } else {
    chatboxForm.style.alignItems = 'center'
  }
})


// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
  chatboxMessage.classList.toggle('show')
})


// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
  if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
    dropdownMenu.classList.remove('show')
  }
})


// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const message = textarea.value.trim();
  if (isValid(message)) {
    writeMessage();
    setTimeout(function() {
      autoReply(message);
    }, 1000);
  }
});

if (isValid(textarea.value)) {
  writeMessage();
  setTimeout(() => autoReply(textarea.value.trim()), 1000);
}


function addZero(num) {
  return num < 10 ? '0'+num : num
}

function writeMessage() {
  const today = new Date()
  let message = `
    <div class="chatbox-message-item sent">
      <span class="chatbox-message-item-text">
        ${textarea.value.trim().replace(/\n/g, '<br>\n')}
      </span>
      <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
  `
  chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
  chatboxForm.style.alignItems = 'center'
  textarea.rows = 1
  textarea.focus()
  textarea.value = ''
  chatboxNoMessage.style.display = 'none'
  scrollBottom()
}

function autoReply(message) {
  const today = new Date()
  let reply = ''

if (message.toLowerCase().includes('hello')|| message.toLowerCase().includes('hi')) {
    reply = 'Hello! How can I assist you today?';
  } else if (message.toLowerCase().includes('help')) {
    reply = 'Sure, I\'d be happy to help! I offer a variety of features to support you, try saying: "talk", "provider", or "support" to get started!' ;
  } else if (message.toLowerCase().includes('talk')) {
    reply = 'I\'d be happy to talk to you! What do you want to talk about?';
  } else if (message.toLowerCase().includes('resources')) {
    reply = 'Here are some mental health resources: <br><br><a href="https://988lifeline.org/talk-to-someone-now/" target="_blank"> Suicide Prevention Lifeline (988),  </a><a href="https://www.crisistextline.org/" target="_blank"> Crisis Textline (741741),  </a><a href="https://save.org/" target="_blank"> SAVE,  </a><a href="https://www.thetrevorproject.org/" target="_blank"> The Trevor Project (LGBTQ+),  </a><a href="https://www.datocms-assets.com/12810/1594144968-black-mental-health-v2-1.pdf" target="_blank"> The Mental Health Coalition,  </a><a href="https://www.asianmhc.org/" target="_blank"> Asian Mental Health Collective,  </a><a href="https://www.healthyamericas.org/" target="_blank"> National Alliance for Hispanic Health,  </a><a href="https://www.wernative.org/" target="_blank"> We R Native,  </a><a href="https://www.inclusivetherapists.com/" target="_blank"> Inclusive Therapists,  </a><a href="https://www.nami.org/Your-Journey/Individuals-with-Mental-Illness" target="_blank"> NAMI,  </a><a href="https://americanaddictioncenters.org/virtual-meetings" target="_blank"> Virtual Support/Online Addiction Meetings,  </a><a href="https://www.veteranscrisisline.net/" target="_blank"> Veteran Crisis Line,  </a><a href="https://www.nami.org/Your-Journey/Family-Members-and-Caregivers/Learning-to-Help-Your-Child-and-Your-Family" target="_blank"> Learning to Help (NAMI),  </a><a href="https://www.nimh.nih.gov/health/find-help" target="_blank"> NIMH,  </a><a href="https://www.samhsa.gov/mental-health/how-to-talk/friends-and-family-members" target="_blank"> SAMHSA,  </a><a href="https://www.psychiatry.org/patients-families/helping-a-loved-one-cope-with-mental-illness" target="_blank"> APA  </a>';
  } else if (
    message.toLowerCase().includes('anxious') ||
    message.toLowerCase().includes('anxiety') ||
    message.toLowerCase().includes('scared') ||
    message.toLowerCase().includes('edge') ||
    message.toLowerCase().includes('fear') ||
    message.toLowerCase().includes('fast') ||
    message.toLowerCase().includes('panic')
  ) {
    reply = 'I\'m very sorry to hear that you\'re feeling anxious. Would you like to receive some coping strategies or self-care practices, words of encouragement, or talk about something else?';
  } else if (
    message.toLowerCase().includes('sad') ||
    message.toLowerCase().includes('depressed') ||
    message.toLowerCase().includes('depression') ||
    message.toLowerCase().includes('lonely') ||
    message.toLowerCase().includes('unmotivated') ||
    message.toLowerCase().includes('moody') ||
    message.toLowerCase().includes('tired')
  ) {
    reply = 'I\'m very sorry to hear that you\'re feeling depressed. Would you like to receive some coping strategies or self-care practices, words of encouragement, or talk about something else?';
  } else if (
    message.toLowerCase().includes('kill') ||
    message.toLowerCase().includes('die') ||
    message.toLowerCase().includes('suicide') ||
    message.toLowerCase().includes('suicidal')
  ) {
    reply = 'I\'m really sorry to hear that you\'re feeling this way. As an AI ChatBot, I will always prioritize your safety and encourage you to seek professional help. Please consider reaching out to a helpline, emergency services in your country, a qualified mental health professional, or a trusted person in your life. Remember, you don\'t have to face this alone, and there are people who care about you and want to help! <br><a href="https://988lifeline.org/talk-to-someone-now/" target="_blank">Suicide Prevention Lifeline - 988</a><br><a href="https://www.crisistextline.org/" target="_blank">Crisis Textline - 741741</a>';
  } else {
    reply = 'Thank you for your message! Unfortunately, I am unable to respond—could you please try saying something else?';
  }

  if (message.toLowerCase().includes('provider')
     ||
message.toLowerCase().includes('local')) {
    reply = 'I\'d be happy to help you find a an mental health provider! If you would like to search for providers in your area, please reply with "search". If you would like to learn more about your health insurance coverage, please please reply with "insurance". If you would like to ____, please reply with "IDK".';
  } 
  
  if (message.toLowerCase().includes('search')) {
    reply = 'You can use this website to help you look for local mental health providers: insert link here';
  } 
  
  if (message.toLowerCase().includes('insurance')) {
    reply = 'You can use this website to help you find out more about your current health insurance coverage, copay and more: insert link here';
  } 
  
  if (message.toLowerCase().includes('IDK')) {
    reply = 'You can use this website to _____: insert link here';
  } 
  
  if ( (message.toLowerCase().includes('coping') ||
  message.toLowerCase().includes('cope') ||  message.toLowerCase().includes('strategies') ||  message.toLowerCase().includes('practices') ||
  message.toLowerCase().includes('self-care'))
) {
  const careWords = [
    'Prioritize restful sleep: Establish a consistent sleep schedule and create a relaxing bedtime routine. Aim for 7-9 hours of quality sleep each night, as sleep plays a vital role in mental health.',
    'Engage in physical activity: Regular exercise can have a positive impact on mental well-being. Find activities you enjoy, such as walking, yoga, dancing, or any form of exercise that suits your preferences and abilities.',
    'Practice relaxation techniques: Explore relaxation techniques like deep breathing exercises, meditation, mindfulness, or progressive muscle relaxation. These practices can help reduce stress, anxiety, and promote a sense of calm.',
    'Connect with others: Cultivate relationships with supportive and understanding people. Reach out to friends, family members, or join support groups where you can share your experiences and receive support. Connection and social support are crucial for mental well-being.',
    'Set boundaries: Learn to recognize and establish healthy boundaries in various areas of your life. This includes setting limits on work or study demands, learning to say "no" when necessary, and prioritizing time for self-care and activities that bring you joy.',
    'Practice self-compassion: Be kind and understanding toward yourself. Treat yourself with the same compassion and empathy you would show to a loved one. Practice positive self-talk and challenge self-critical thoughts.',
    'Limit exposure to stressors: Identify sources of stress in your life and explore ways to reduce or manage them. This might involve setting boundaries with work, reducing exposure to triggers, or seeking support to address specific stressors.'
  ];
  const randomIndex = Math.floor(Math.random() * careWords.length);
  reply = `Sure, here is a coping strategy or self-care practice you can try: ${careWords[randomIndex]}`;
}

if (message.toLowerCase().includes('encourage')) {
  const positiveWords = [
    'You are stronger than you realize. Each day you face these challenges, you demonstrate resilience and inner strength. Keep pushing forward, and know that you have the power to overcome.',
    'It\'s okay to not be okay. Remember that experiencing difficult emotions is a natural part of being human. Be kind to yourself and give yourself permission to feel and process your emotions at your own pace.',
    'You are deserving of support and understanding. Reach out to trusted friends, family members, or professionals who can offer a listening ear and support. You don\'t have to face this journey alone, and there are people who genuinely care about your well-being.',
    'Small steps forward matter. Celebrate every small victory along the way. Even the tiniest progress is a step towards healing and growth. Allow yourself to appreciate the progress you make, no matter how small it may seem.',
    'Your feelings are valid. Your experiences and emotions are real and should be acknowledged. It\'s essential to be gentle with yourself and recognize that your feelings matter. Give yourself permission to prioritize self-care and seek the help you need.',
    'This is just a chapter in your life, not the entire story. Difficult times do not define you. The challenges you face now will shape you, but they won\'t limit your potential or determine your future. Keep looking forward and remember that brighter days can lie ahead.',
    'You are worth fighting for. Your life has inherent value, and there are people who love and care about you. Even if it feels difficult right now, hold on to the belief that you are worthy of a happier and healthier life. Keep fighting, and don\'t give up on yourself.'
  ];
  const randomIndex = Math.floor(Math.random() * positiveWords.length);
  reply = `Okay! Here are some words of encouragement: ${positiveWords[randomIndex]}`;
}

if (
  message.toLowerCase().includes('support') || //&& 
  (
    message.toLowerCase().includes('parent') ||
    message.toLowerCase().includes('teen') ||
    message.toLowerCase().includes('mom') ||
  
   message.toLowerCase().includes('dad') || 
    message.toLowerCase().includes('child') ||
    message.toLowerCase().includes('partner') ||
    message.toLowerCase().includes('girlfriend') ||
    message.toLowerCase().includes('boyfriend') ||
    message.toLowerCase().includes('son') ||
    message.toLowerCase().includes('daughter') ||
    message.toLowerCase().includes('kid') ||
    message.toLowerCase().includes('student') ||
    message.toLowerCase().includes('peer') ||
    message.toLowerCase().includes('loved one')
  )
) {
  const supportiveWords = ['Be present and listen: Create a safe and non-judgmental space for your loved one to express their feelings and thoughts. Be an attentive listener without interrupting or trying to offer immediate solutions. Sometimes, lending a compassionate ear can make a significant difference.','Educate yourself: Learn about the mental health condition your loved one is experiencing. This can help you understand their challenges better and offer informed support. Read reliable sources, attend support groups, or consult with mental health professionals for guidance.','Validate their experiences: Acknowledge and validate your loved one/s feelings. Let them know that their experiences are real and valid. Avoid dismissing or minimizing their struggles. Show empathy and understanding, even if you may not fully comprehend their situation.','Offer practical help: Help your loved one with practical tasks they may find overwhelming. This could involve assisting with household chores, running errands, or accompanying them to appointments. Offering concrete support can alleviate some of their stress and make them feel cared for.','Encourage professional help: Suggest seeking professional support and encourage your loved one to reach out to a mental health professional. Offer assistance in finding suitable resources, such as therapists, counselors, or support groups. Recognize that professional help can provide specialized care.','Be patient and understanding: Recovery takes time, and there may be ups and downs along the way. Practice patience and understanding. Avoid putting pressure on your loved one to "get better" quickly. Offer consistent support and let them know you/re there for them, regardless of their progress.','Maintain open communication: Foster open and honest communication with your loved one. Encourage them to share their thoughts, concerns, and needs. Regularly check in with them and let them know they can approach you anytime they need to talk.','Avoid judgment and stigma: Create a safe and non-stigmatizing environment for your loved one. Avoid labeling or judging them based on their mental health condition. Foster a supportive atmosphere where they feel accepted and understood.','Celebrate small victories: Acknowledge and celebrate the progress your loved one makes, no matter how small. Encouragement and positive reinforcement can inspire hope and motivate them to continue their journey towards better mental health.'];
  const randomIndex = Math.floor(Math.random() * supportiveWords.length);
  reply = `Supporting a loved one who is struggling with their mental health is crucial. Here is one way you can provide support:<br><br> ${supportiveWords[randomIndex]} <br><i>Additional links:<br><a href="https://www.psychiatry.org/patients-families/helping-a-loved-one-cope-with-mental-illness" target="_blank">APA, </a><a href="https://www.nami.org/Your-Journey/Family-Members-and-Caregivers/Learning-to-Help-Your-Child-and-Your-Family" target="_blank"> NAMI, </a><a href="https://www.samhsa.gov/mental-health/how-to-talk/friends-and-family-members" target="_blank">SAMHSA</i></a>`;
}
  
  let chatboxReply = `
    <div class="chatbox-message-item received">
      <span class="chatbox-message-item-text">
        ${reply}
      </span>
      <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
  `
  chatboxMessageWrapper.insertAdjacentHTML('beforeend', chatboxReply)
  scrollBottom()
}

function scrollBottom() {
  chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
  let text = value.replace(/\n/g, '')
  text = text.replace(/\s/g, '')

  return text.length > 0
}