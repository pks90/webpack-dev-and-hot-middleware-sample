$(document).ready(function(){

  $('.carousel').carousel({
    interval: 5000
  })

  $('#select_dates').hide();
  $('#select_trainings').show();

  $('#next').click(function() {
    var activeTabText = $('.nav-tabs .active').text()

    if(activeTabText == 'Readiness Check'){

      var heading=$('#t1_header').text()

      if(heading == 'Training Required ?'){
        ideationStep();
      }
      else if(heading == 'Ideation Workshop Required ?') {
        hackathonStep();
      }
      else if(heading == 'Hackathon required ?') {
        consultingStep();
      }

    } else if(activeTabText == 'Requirements Engineering') {
      $('#t2_img').attr('src','../images/d5.png');
    }
  });

  $('#prev').click(function() {
    var activeTabText = $('.nav-tabs .active').text()

    if(activeTabText == 'Readiness Check'){

      var heading=$('#t1_header').text()

      if(heading == 'Ideation Workshop Required ?') {
        trainingStep();
      }
      else if(heading == 'Hackathon required ?'){
        ideationStep();
      }
      else if(heading == 'Consulting required ?') {
        hackathonStep();
      }

    } else if(activeTabText == 'Requirements Engineering') {
      $('#t2_img').attr('src','../images/d5.png');
    }
  });

  function traingListConsulting()
  {
    $("#training_list")
   .html('<option>Requirement Specification</option><option>Process Description</option><option>Functional Analysis and Data</option><option>Specification</option>')
   .selectpicker('refresh');
  }

  function traingListTraining()
  {
    $("#training_list")
   .html('<option>Basic Training</option><option>DevOps</option><option>Internals</option><option>H/W and Sensors</option>')
   .selectpicker('refresh');
  }

  function traingListRequirementsEngineering()
  {
    $("#training_list")
   .html('<option>Business Case Preparation</option><option>Business Case to Functional Doc</option>')
   .selectpicker('refresh');
  }

  function ideationStep()
  {
    $('#select_dates').show();
    $('#select_trainings').hide();
    $('#t1_img').attr('src','../images/d2.png');
    $('#t1_header').text('Ideation Workshop Required ?');
    $('#t1_desc').text('This helps in identification and generation of possible idea to opportunity as well as the Pain Point analysis of the existing processes which could lead to internal or external products.');
  }

  function hackathonStep()
  {
    $('#select_dates').show();
    $('#select_trainings').hide();
    $('#t1_img').attr('src','../images/d3.png');
    $('#t1_header').text('Hackathon required ?');
    $('#t1_desc').text('We can help to get you, hands on with MindSphere  and while doing so we can detail out your specific idea / challenge (s) by having a dedicated session (1-2 days).');
  }

  function consultingStep()
  {
    traingListConsulting()
    $('#select_dates').hide();
    $('#select_trainings').show();
    $('#t1_img').attr('src','../images/d4.png');
    $('#t1_header').text('Consulting required ?');
    $('#t1_desc').text('With Consulting we help you to discover the As-Is and define To be. This includes detailing out Gap to Goal by defining the IT architecture, and roadmap of solution deployment with PoCs.');
  }

  function trainingStep()
  {
    traingListTraining();
    $('#select_dates').hide();
    $('#select_trainings').show();
    $('#t1_img').attr('src','../images/d1.png');
    $('#t1_header').text('Training Required ?');
    $('#t1_desc').text('Trainings contains Basic awareness about MindSphere Ecosystem and its interconnection with various interfaces. Selection of multiple training options are possible. In case of specific training please mention in comments.');
  }

});


