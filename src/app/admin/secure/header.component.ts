import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-header',
  template: `
        <nav class="navbar navbar-default navbar-static-top m-b-0">
            <div class="navbar-header"> <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i class="ti-menu"></i></a>
                <div class="top-left-part"><a class="logo" routling="/"><b><img src="style/assets/website/images/whiteLogoPart.png" alt="home" class="light-logo" style="width:30px;height:30px;"></b><span class="hidden-xs"><img src="style/assets/website/images/whiteLogo.png" style="max-width:100px;" alt="home" class="light-logo"></span></a></div>
                <ul class="nav navbar-top-links navbar-left hidden-xs">
                    <li><a href="javascript:void(0)" class="open-close hidden-xs waves-effect waves-light"><i class="icon-arrow-left-circle ti-menu"></i></a></li>
                    <li>
                      
                    </li>
                </ul>
                <ul class="nav navbar-top-links navbar-right pull-right">
                    <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-envelope"></i>
        
          <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
          </a>
  <!-- new msg ________________________________________________________________________________________________________-->
          
                        <ul class="dropdown-menu mailbox animated bounceInDown">
                            <li>
                                <div class="drop-title">You have  new messages</div>
                            </li>
               <app-msg></app-msg>
                          
                        </ul>
                        <!-- /.dropdown-messages -->
                    </li>

                    <!-- /.dropdown -->
                    <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-note"></i>
          <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
          </a>
                        <ul class="dropdown-menu dropdown-tasks animated slideInUp">
                 
           <app-msges></app-msges> 
               
                            
                          
                        </ul>
                        <!-- /.dropdown-tasks -->
                    </li>
                    <!-- /.dropdown -->
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-language"></i> Language</a>
                        <ul class="dropdown-menu dropdown-user animated flipInY">
                            <li><a routerLink="#">Arabic</a></li>
                            <li></li>
                            <li><a routerLink="#"> English</a></li>
                        </ul>
                        <!-- /.dropdown-user -->
                    </li>

                    <li class="dropdown">
                        <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="style/plugins/images/users/dd.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">Admin</b> </a>
                        <ul class="dropdown-menu dropdown-user animated flipInY">
                                      <li role="separator" class="divider"></li>
                            <li><a routerLink="/"><i class="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                        <!-- /.dropdown-user -->
                    </li>
                    <!-- .Megamenu -->
                  
                    <!-- /.Megamenu -->
                    <li class="right-side-toggle"> <a class="waves-effect waves-light" href="javascript:void(0)"><i class="ti-settings"></i></a></li>
                    <!-- /.dropdown -->
                </ul>
            </div>
            <!-- /.navbar-header -->
            <!-- /.navbar-top-links -->
            <!-- /.navbar-static-side -->
        </nav>
`,

})
export class HeaderComponent  {




}
