$(document).one('pageinit', function(){

// Handlers    
    
    // display runs
    showRuns();
    
    // Add Handler
    $('#submitAdd').on('tap', addRun);
    
    // edit Handler
    $('#submitEdit').on('tap', editRun);
    
    // Set current handler
    $('#stats').on('tap', '#editLink', setCurrent);
    
    // Delete handler
    $('#stats').on('tap', '#deleteLink', deleteRun);
    
    // Clear runs
    $('#clearRuns').on('tap', clearRuns);
    
// Functions
    
    // show all runs on homepage
    function showRuns(){
        // get runs object
        var runs = getRunsObject();
        
        // check if empty
        if(runs != '' && runs != null){
            for(var i = 0; i < runs.length; i++){
                $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date: </strong>'+runs[i].date+'<br><strong>Distance: </strong>'+runs[i].miles+'m<div class="controls">'+'<a href="#edit" id="editLink" data-miles="'+runs[i].miles+'" data-date="'+runs[i].date+'">Edit</a> | <a href="#" id="deleteLink" data-miles="'+runs[i].miles+'" data-date="'+runs[i].date+'" onclick="return confirm(\'Are You Sure?\')">Delete</a></li>');
            }
            $('#home').bind('pageinit', function(){
                $('#stats').listview('refresh');
            });
        } else {
            $('#stats').html('<p>You Have No Logged Runs</p>');
        }
    }
    
    // Add a run
    function addRun(){
        // get form values
        var miles = $('#addMiles').val();
        var date = $('#addDate').val();
        
        // create the 'run' object
        var run = {
            date: date,
            miles: parseFloat(miles)
        };
        
        var runs = getRunsObject();
        
        // add run to runs arrary
        runs.push(run);
        alert('Run Added');
        
        // set stringified objects to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        // redirect to index page
        
        window.location.href="index.html";
        
        return false;
        
    }
    
    // Edit a run
    function editRun(){
        // get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs = getRunsObject();
        
        // loop through runs
        
        for(var i = 0; i < runs.length; i++){
            if(runs[i].miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i,1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
        
        // get form values
        var miles = $('#editMiles').val();
        var date = $('#editDate').val();
        
        // create the 'update_run' object
        var update_run = {
            date: date,
            miles: parseFloat(miles)
        };
        
        // replcae run with update_run
        runs.push(update_run);
        alert('Run updated');
        
        // set stringified objects to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        // redurect to index page
        window.location.href="index.html";
        return false;
    }
    
    // delete a run
    function deleteRun(){
        // set current data
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        // get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');
        
        var runs = getRunsObject();
        
        // loop through runs
        
        for(var i = 0; i < runs.length; i++){
            if(runs[i].miles == currentMiles && runs[i].date == currentDate){
                runs.splice(i,1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }
        
        alert('Run Deleted');
        
        // set stringified objects to localStorage
        localStorage.setItem('runs', JSON.stringify(runs));
        
        // redurect to index page
        window.location.href="index.html";
        return false;
    }
    
    // clear runs functions
    function clearRuns(){
        localStorage.removeItem('runs');
        $('#stats').html('<p>You Have No Logged Runs</p>');
    };
    
    // get the runs object
    function getRunsObject(){
        // set runs array
        var runs = [];
        
        // get current runs from local storage
        var currentRuns = localStorage.getItem('runs');
        
        // Check localStorage
        if(currentRuns !== null){
            // set it to runs
            runs = JSON.parse(currentRuns);
        }
   
        // return runs object
        return runs.sort(function(a, b){
            return new Date(b.date) - new Date(a.date);
        });
        
    }
    
    // set the curent clicked miles and date
    function setCurrent(){
        // set list items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));
        
        // insert form fields
        $('#editMiles').val(localStorage.getItem('currentMiles'));
        $('#editDate').val(localStorage.getItem('currentDate'));
    }
});