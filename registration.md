---
title: Registration
weight: 4
layout: page
---

<form action="php/registration.php" id="registration_form" method="post">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="First Name" id="fname" name="fname"
                                required>
                    </div> <!-- /.form-group -->
                </div> <!-- /.col-sm-6 -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Last Name" id="lname" name="lname"
                                required>
                    </div> <!-- /.form-group -->
                </div> <!-- /.col-sm-6 -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" name="email"
                                required>
                    </div> <!-- /.form-group -->
                </div> <!-- /.col-sm-6 -->
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Age" name="age"
                                required>
                    </div> <!-- /.form-group -->
                </div> <!-- /.col-sm-6 -->
                <div class="col-sm-12">
                    <div class="form-group">
                        <textarea class="form-control" rows="6" placeholder="Message" name="message"></textarea>
                    </div> <!-- /.form-group -->
                </div> <!-- /.col-sm-12 -->
                <div class="text-center mt20 col-sm-6 col-sm-offset-3">
                    <button type="submit" class="btn btn-black" id="rfsubmit">Submit</button>
                </div>
            </div> <!-- /.row -->
        </div> <!-- /.col-md-10.col-md-offset-1 -->
    </div>
</form>