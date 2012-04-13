<?php
						if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comments']) )
							{
							$file = fopen("comment.txt","a");
							fwrite($file,"Name :".$_POST['name']."\n");
							fwrite($file,"Email :".$_POST['email']."\n");
							fwrite($file,"Comments :".$_POST['comments']."\n\n");
							
							header( 'location:contact.html' );
							exit;
							}
						else
						{	
							header( "location:index.html" );
							exit;
						}
?>
