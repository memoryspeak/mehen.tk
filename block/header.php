<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

  <div class="dropdown">
    <a style="background: transparent;" class="navbar-brand nav-link me-0 px-3" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Mehen&#128013;<?php if ($_COOKIE['uid']) { echo unserialize($_COOKIE['uid'])['username'].'@'.unserialize($_COOKIE['uid'])['rating']; }; ?>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
      <li><a class="dropdown-item" href="#">Account</a></li>
      <li><a class="dropdown-item" href="#">Language</a></li>
      <li><a class="dropdown-item" href="#">Sound</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="/sign/sign.php">
            <?php
              if ($_COOKIE['uid'] == '') { echo 'Sign In'; } else { echo 'Sign Out'; };
            ?>
          </a></li>
    </ul>
  </div>

  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link me-0 px-3" href="#">&#127922; <span style="color: #6B8E23"><b>123</b></span></a>
    </div>
  </div>
  <button class="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</header>
