function validate_email() 
	{
    var emailRegEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if($("#email").val().match(emailRegEx))
		{
		$("#message_c").hide();
        return true;
		}
    else
		{
		$("#message_c").hide();
		$("#message_c").html('This not a valid email address..').fadeIn(1000);
        return false;
		}   
	}

		
function validate(thisform)
	{
	with(thisform)
		{
		if(validate_email()==false)
			{
			 return false;
			}
		}
	}
	