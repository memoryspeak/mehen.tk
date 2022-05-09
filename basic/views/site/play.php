<?php

/** @var yii\web\View $this */

use yii\helpers\Html;

$this->title = $tag.' game';
$this->registerJsFile('@web/js/play.js', ['depends' => 'yii\web\YiiAsset', 'type' => 'module']);
?>

<div class="row">

  <div class="col-sm" id="menuList">
    <h1 style="text-transform:uppercase"><?php echo $tag?> game</h1>
  </div>

  <div class="col-sm" id="mehenboard"></div>

</div>
