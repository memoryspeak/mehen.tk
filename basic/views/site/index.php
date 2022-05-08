<?php

/** @var yii\web\View $this */

//$this->title = 'Cusima';
$this->title = Yii::$app->name;


?>
<div class="site-index">

    <div class="jumbotron text-center bg-transparent">
        <svg
          width="50mm"
          height="50mm"
          viewBox="0 0 150 150"
          version="1.1"
          id="svg5"
          inkscape:version="1.1.2 (08b2f3d93c, 2022-04-05)"
          sodipodi:docname="cusima.svg"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg">
          <sodipodi:namedview
            id="namedview7"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageshadow="2"
            inkscape:pageopacity="0.0"
            inkscape:pagecheckerboard="0"
            inkscape:document-units="mm"
            showgrid="false"
            inkscape:zoom="0.70710678"
            inkscape:cx="433.45645"
            inkscape:cy="398.10112"
            inkscape:window-width="1848"
            inkscape:window-height="1016"
            inkscape:window-x="72"
            inkscape:window-y="27"
            inkscape:window-maximized="1"
            inkscape:current-layer="layer1"
            width="150mm" />
          <defs
            id="defs2" />
          <g
            inkscape:label="1"
            inkscape:groupmode="layer"
            id="layer1">
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.127005"
            id="rect31"
            width="14.905944"
            height="74.318169"
            x="4.6195278"
            y="34.928772"
            ry="1.5362544" />
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.0960145"
            id="rect31-2"
            width="12.797494"
            height="49.471245"
            x="-41.081398"
            y="-2.6992359"
            ry="1.0226357"
            transform="matrix(-0.45478689,-0.89060029,0.89811651,-0.43975758,0,0)" />
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.0960145"
            id="rect31-2-5"
            width="12.797494"
            height="49.471245"
            x="24.779423"
            y="-136.08138"
            ry="1.0226357"
            transform="matrix(0.45478689,-0.89060029,-0.89811651,-0.43975758,0,0)" />
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.127342"
            id="rect31-3"
            width="13.726863"
            height="81.129013"
            x="-30.528351"
            y="23.967119"
            ry="1.6770436"
            transform="matrix(0.5612243,-0.82766375,0.88082479,0.47344239,0,0)" />
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.127342"
            id="rect31-3-8"
            width="13.726862"
            height="81.129013"
            x="-101.88712"
            y="-100.78101"
            ry="1.6770436"
            transform="matrix(-0.56122431,-0.82766374,-0.88082479,0.47344239,0,0)" />
          <rect
            style="fill:#000000;fill-rule:evenodd;stroke-width:0.127005"
            id="rect31-4"
            width="14.905944"
            height="74.318169"
            x="130.41499"
            y="34.928345"
            ry="1.5362544" />
          <path
            style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.148852px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 27.772688,34.679333 v -0.84795"
            id="path1544"
            inkscape:connector-type="polyline"
            inkscape:connector-curvature="0" />
          <rect
            style="fill:none;fill-rule:evenodd;stroke-width:0.148852"
            id="rect3836"
            width="38.970032"
            height="28.56673"
            x="57.776047"
            y="-13.728133"
            ry="1.5362554" />
          <rect
            style="fill:#ff0000;fill-rule:evenodd;stroke-width:0.127005"
            id="rect31-6"
            width="14.905944"
            height="74.318169"
            x="67.522621"
            y="69.698708"
            ry="1.6987797" />
          </g>
        </svg>

        <h1 class="display-4" style="text-transform:uppercase"><?php echo Yii::$app->name?></h1>

        <p class="lead">This project will allow you to focus on work, not on finding information.</p>

        <p><a class="btn btn-lg btn-success" href=<?php echo Yii::$app->homeUrl."?r=site%2Fabout"?>>About</a></p>
    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-4">
                <h2><a class="nav-link text-body" href=<?php echo Yii::$app->homeUrl."?r=site%2Fphone"?>>&#128383;Phone</a></h2>

                <p>The Cusima Phone contains an extensive database of corporate contacts, allows you to edit contacts, add them to the database and delete them if necessary.</p>

                <p><a class="btn btn-outline-secondary" href=<?php echo Yii::$app->homeUrl."?r=site%2Fdocumentation&page=phone"?>>Cusima Phone Documentation &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2><a class="nav-link text-body" href=<?php echo Yii::$app->homeUrl."?r=site%2Fdocx"?>>&#128462;Docx</a></h2>

                <p>The Cusima Docx allows you to create orders in a given format, store order data with the possibility of a wide search.</p>

                <p><a class="btn btn-outline-secondary" href=<?php echo Yii::$app->homeUrl."?r=site%2Fdocumentation&page=docx"?>>Cusima Docx Documentation &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2><a class="nav-link text-body" href=<?php echo Yii::$app->homeUrl."?r=site%2Fwindows"?>>&#128471;Windows</a></h2>

                <p>The Cusima Windows helps to track the production of works in technological intervals.</p>

                <p><a class="btn btn-outline-secondary" href=<?php echo Yii::$app->homeUrl."?r=site%2Fdocumentation&page=windows"?>>Cusima Windows Documentation &raquo;</a></p>
            </div>
        </div>

    </div>
</div>
