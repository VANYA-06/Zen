
<!DOCTYPE html>
<html>
<head>
    <title>Pan Card Design</title>
</head>
<body  bgcolor = "#FFFFDD">
    <table width = "100%">
        <tbody><tr bgcolor = "#660000">
           <td align = "CENTER">
               <b><font color = "white">Request For New PAN Card Or/And Changes Or Correction in PAN Data</b><br>
                    <i>Fields marked with * (asterisk) are mandatory. . To avoid mistake(s), please refer guidelines and instructions</i>
                </font></b>
           </td>
        </tr>
    </tbody></table>

    <form>
        <table border="1" cellspacing="0" cellspacing="0" width=90%>
            <tbody>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b><font color="RED">*</font> Whether citizen of India</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        
                        <label for="Indian">Yes</label>
                        <input type="radio" name="citizen" id="Indian">&nbsp; &nbsp;
                        
                        <label for="Others">No</label> 
                        <input type="radio" name="citizen" id="Others">
                </td>
                </tr>
                
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b><font color="RED">*</font> Permanent Account Number (PAN) </b>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text" value="" id="panNum">
                    </td>
                </tr>

                <tr>
                    <td><input type="checkbox" id="name-check"></td>
                    <td><b><font color="RED">*</font> 1. Name</b></td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td><b>Title</b> 
                    &emsp;&emsp;&emsp;&emsp;&emsp;

                    <label for="MarriedMen">Shri/Mr</label>
                    <input type="radio" name="title" id="MarriedMen">&emsp;&emsp;
                        
                    <label for="MarriedWomen">Smt./Mrs.</label> 
                    <input type="radio" name="title" id="MarriedWomen">&emsp;&emsp;

                    <label for="Men">Kumari/Ms</label>
                    <input type="radio" name="title" id="Men">&emsp;&emsp;
                        
                    <label for="Women">M/s</label> 
                    <input type="radio" name="title" id="Women">
                </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                      <table width="100%">
                      <tbody><tr>
                         <td><b>Last Name/Surname</b><br><input type="text" name="lname" ></td>
                         <td><b>First Name</b><br><input type="text" name="fname" ></td>
                         <td><b>Middle Name</b><br><input type="text" name="mname" ></td>
                      </tr>
                      </tbody></table>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td><b><font color="RED">*</font>Name as you would like it printed on the card</b> (Prefix like Shri, Smt, Kumari, Late, Dr, CA, Ms, Mr, Mrs, M/s, Alias etc. are not allowed)</td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                        <td colspan="2"><b> Whether mother is single parent and you wish to apply for PAN by furnishing the name of your mother only
                        </b>
                            &emsp;&emsp;&emsp;&emsp;&emsp;
                                   <label for="yes">Yes</label>
                                    <input type="radio" name="singleParent" id="yes">&nbsp; &nbsp;
                                    <label for="no">No</label> 
                                    <input type="radio" name="singleParent" id="no">
                        </td>
                </tr>

                <tr>
                    <td><input type="checkbox" id="fname-check"></td>
                        <td><font color ="RED">*</font><b> Father's Name</b>(Mandatory field. Even married women should give father's name only.)</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <table width="100%">
                        <tbody><tr>
                           <td><b>Last Name/Surname</b><br><input type="text" name="lname" ></td>
                           <td><b>First Name</b><br><input type="text" name="fname" ></td>
                           <td><b>Middle Name</b><br><input type="text" name="mname" ></td>
                        </tr>
                        </tbody></table>
                    </td>
                </tr>

                <tr>
                    <td><input type="checkbox" id="mname-check"></td>
                        <td>Mother's Name(This field is optional.)</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <table width="100%">
                        <tbody><tr>
                           <td><b>Last Name/Surname</b><br><input type="text" name="lname" ></td>
                           <td><b>First Name</b><br><input type="text" name="fname" ></td>
                           <td><b>Middle Name</b><br><input type="text" name="mname" ></td>
                        </tr>
                        </tbody></table>
                      </td>
  
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <font color ="RED">*</font><b> 4. Select Parent name which is to be printed on the card</b><br>
                        (In case no option is provided then PAN card will be issued with father's name)
                            &emsp;&emsp;&emsp;&emsp;&emsp;
                            <label for="father-name">Father Name</label>
                            <input type="radio" name="fm-name" id="father-name">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="mother-name">Mother Name</label>
                            <input type="radio" name="fm-name" id="mother-name">
                        </td>
                </tr>   

                <tr>
                    <td><input type="checkbox" id="dob-check"></td>
                    <td><font color ="RED">*</font><b> 5. Date of Birth/Incorporation/Agreement/Partnership<br>
                        or Trust Deed/Formation of Body of Individuals/<br>
                        Association of Persons
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <label for="date"></label>
                        <input type="date">
                    </td>
                </tr>

                <tr>
                    <td><input type="checkbox" id="gender-check"></td>
                    <td>
                        <font color ="RED">*</font><b> 6. Gender</b>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="male">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="female">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="trans">Transagender</label>
                            <input type="radio" name="gender" id="trans">
                        </td>
                </tr>

                <tr>
                    <td><input type="checkbox" id="photo-check"></td>
                    <td>
                        <b>&nbsp; 7. Photo Mismatch</b>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="sign-check"></td>
                    <td>
                        <b>&nbsp; 8. Signature Mismatch</b>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" id="sign-check" checked></td>
                    <td>
                        <font color ="RED">*</font><b> 9. Address for Communication</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <label for="male">Residental</label>
                            <input type="radio" name="addres" id="res">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="female">Office</label>
                            <input type="radio" name="addres" id="off">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Office Name</b> (to be filled only in case of office address)
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Flat/Door/Block No.</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Name of Premises/Building/Village</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>   
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Road/Street/Lane/Post Office</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Area/Locality/Taluka/Sub-Division</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Town/City/District</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>State/Union Territory</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <select>
                            <option value="">-- Please Select --</option>
                            <option value="tn">Tn</option>
                            <option value="other">Others</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>PIN (Indicating PIN is mandatory)</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text">
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Country</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <select>
                            <option value="">-- Please Select --</option>
                            <option value="in">India</option>
                            <option value="other">Others</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>Zip</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text" disabled>
                    </td>
                </tr>

                <tr>
                    <td>
                       <input type="checkbox">
                    </td>
                    <td>
                       <b> 10. If you desire to update your other address, give required details &amp; </b> <b> <u> Submit proof of other
                       address also</u>.
                    </b></td>
                  </tr>
            
                  <tr>
                    <td>
                       <input type="checkbox">
                    </td>
                    <td>
                       <b>11. Telephone No.</b>
                        (Country code is compulsory)</u>.
                    
                    <table>
                      <tbody>
                          <tr>
                          <td>
                          Country code (ISD code)<br>
                          <select name="ph" id="TelNum">
                          <option value="">-- Please select --</option>
                          <option value="in">India (91)</option>
                          <option value="others">Others (61)</option>
                       </td>
                  
                  </tr>
                  <tr>
                  
                  <td>
                  <input type="RADIO" name="number" id="phnum" value="M"> Mobile No.
                  </td>
                  
                  <td colspan="1">
                  <input type="RADIO" name="number" id="telnum" value="T"> Telephone No.
                  </td>
                  
                  
                  
                  </tr>
                  <tr>
                  
                       <td>
                        Area/STD Code><br>
                        <input type="text" name="STD" value="" id="telnum1" size="10" maxlength="7">
                       </td>
                       <td>
                       Telephone No./Mobile No.<br>
                        <input type="text" name="NUM" value="" id="pantelnum2" size="13" maxlength="13">
                        </td>
                    </tr>
                    </tbody></table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>&nbsp;</td>
                    <td><b> E-mail ID</b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <input type="text" name="PAN_EMAIL" value="" size="40" maxlength="40"></td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td>
                        In case of a citizen of India, then
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <label for="AADHAAAR">AADHAAAR</label>
                            <input type="radio" name="addres" id="AADHAAAR">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="EID">EID</label>
                            <input type="radio" name="addres" id="EID   ">
                    </td>
                </tr>

                <tr id="AADHAR">
                    <td>&nbsp;</td>
                    <td><input type="checkbox" id="aadhar-check">
                    <b><font color="RED">*</font> 12. AADHAAR number : </b>
                       <input type="text" id="aadh-num">
                       <input type="hidden"> <br>
                       <i><b><font color="#00008B">In case AADHAAR number is provided, <br>then proof of AADHAAR along with supporting documents is to be submitted to NSDL</font></b></i>
                    </td> 
                 </tr>
                 
                 <tr>
                    <td><input type="CHECKBOX" id="eid-check">
                    <td><b><font color="RED">*</font> 12. Enrollment ID (EID) : </b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <input type="text" name="EID-NUM" id="EID-NUM" >
                      </td>
                 </tr>
                 
                 <tr>
                 <td> </td>
                   <td><font color="RED">*</font> Name as per AADHAAR letter <br>or <br>as per the enrollment ID of Aadhaar application form
                   <input type="text" id="aad"></td>
                 </tr>
                 
                 <tr>
                    <td> </td>
                    <td colspan="2">
                        <div id="aadharNote" style="display: none; ">

                 </div>
                </td>
                 </tr>
                 
                 
                 
                 <tr>
                   <td>&nbsp;</td>
                   <td><b>13. GSTN</b>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <input type="text" name="GSTN" value=""></td>
                 </tr>
                 
                 <tr>
                    <td>&nbsp;</td>
                    <td><b>14.  Mention other Permanent Account Numbers (PANs) if any,inadvertently allotted to you. Submit proof of surrendered PAN(s) along with the application.</b></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <label for="pan1">Pan 1</label>
                        <input type="text" name="pan1" value=""><br>

                        <label for="pan2">Pan 2</label>
                        <input type="text" name="pan2" value=""><br>
                        
                        <label for="pan3">Pan 3</label>
                        <input type="text" name="pan3" value=""><br>
                        
                        <label for="pan4">Pan 4</label>
                        <input type="text" name="pan4" value=""><br>
                    </td>
                </tr>
                
                <tr>
                    <td>&nbsp;</td>
                    <td colspan="2"><b> 15. Verification </b></td>
                 </tr>
                 
                 <tr>
                     <td>&nbsp;</td>
                     <td colspan="2" valign="TOP">I/We 
                     &nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="text" name="PAN_VERIFY_NAME" value="" size="75" maxlength="75" onchange="document.getElementById('dsc1').value=this.value" onload="document.getElementById('dsc1').value=this.value"> 
                     ,the applicant,in the capacity of
                     &nbsp;&nbsp;&nbsp;
                     <select name="PAN_VERIFY_CAPACITY">
                              <option value="">-- Please Select --
                              </option><option value="01"> Himself/herself
                              </option><option value="07"> Representative Assessee
                         </option></select>
                     do hereby declare that what is stated above is true to the best of my information and belief. <br>
                     I have enclosed <input type="text" name="PAN_NOCOPY" value="" size="2" maxlength="2">
                     (number of documents) in support of proposed changes/corrections.
                   </td>
                 </tr>
    
                 <tr>
                    <td>&nbsp;</td>
                    <td>Place
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" name="Place" value="">
                    </td>
                   </tr>
                  
                   <tr>
                    <td>&nbsp;</td>
                    <td >
                      Verified today, 03 - 08 - 2020
                    </td>
                  </tr>
                
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        I/We have enclosed   
                        <select name="name">
                            <option value="">---Please Select---</option><option value="9" title="Copy of passport">Copy of passport</option><option value="36" title="Copy of Person of Indian Origin card issued by Government of India">Copy of Person of Indian Origin card issued by Government of India</option>
                        </select>
                        as a part of identity
                        <select name="name">
                            <option value="">---Please Select---</option><option value="9" title="Copy of passport">Copy of passport</option><option value="36" title="Copy of Person of Indian Origin card issued by Government of India">Copy of Person of Indian Origin card issued by Government of India</option>
                        </select>
                        as proof of address,
                        <select name="name">
                            <option value="">---Please Select---</option><option value="9" title="Copy of passport">Copy of passport</option><option value="36" title="Copy of Person of Indian Origin card issued by Government of India">Copy of Person of Indian Origin card issued by Government of India</option>
                        </select>
                        as proof of date of birth and
                        <select name="name">
                            <option value="">---Please Select---</option><option value="9" title="Copy of passport">Copy of passport</option><option value="36" title="Copy of Person of Indian Origin card issued by Government of India">Copy of Person of Indian Origin card issued by Government of India</option>
                        </select>
                         as proof of PAN allotted.
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b> Whether you wish to have? </b>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <label for="both">Physical PAN Card & e-PAN Card</label>
                            <input type="radio" name="card" id="both">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="pan">Only PAN Card</label>
                            <input type="radio" name="card" id="pan">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label for="e-pan">Only E-PAN Card</label>
                            <input type="radio" name="card" id="e-pan">
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b> Other Details </b>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b>1. Depository Account Details</b>
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b> DP ID:</b>
                        <input type="text" id="DP"> &nbsp;&nbsp;&nbsp;
                        <b> client ID:</b>
                        <input type="text" id="client">
                    </td>
                </tr>

                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <b> 2. Payment Details </b>
                    </td>
                </tr>

                <tr>
                    <td><input type="radio" id="paymnet"></td>
                    <td>
                        <b> Online Payment </b>
                    </td>
                </tr>

            </tbody>
        </table>
        <b>For Paperless PAN Application:</b>
            <label for="paperless">Yes</label>
            <input type="radio" name="isPaper" id="yes">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label for="paper">No</label>
            <input type="radio" name="isPaper" id="no">
            <br>
            <label for="dsc">DSC</label>
            <input type="radio" name="isPaper" id="dsc" checked>
            <select>
                <option value="select">--Select--</option>
                 <option value="MINOR">Minor</option>
                 <option value="lu">Lunatic/Idiot</option>
                 <option value="self">Self</option>
            </select>
            
            <br>
            <label for="photo">Upload Photo</label>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="file" id="photo">
            
            <br>
            <label for="sign">Upload Signature</label>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="file" id="sign">

            <br>
            <label for="document">Upload document</label>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="file" id="document">
            
            <br>
            <label for="photo-send">ALREADY UPLOADED PHOTO:</label>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="text" id="photo-send">
            
            <br>
            <label for="sign-send">ALREADY UPLOADED SIGNATURE:</label>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="text" id="sign-send">
            
            <br>
            <label for="document-send">ALREADY UPLOADED DOCUMENTS:</label><br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <textarea rows="4" cols="50" value=""></textarea><br>
            <input type="submit">
    </form>

</body>
</html>