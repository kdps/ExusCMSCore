<?php if(!defined("__FLOWER__")) exit();
	$this->base = new base();
	$this->base->addCSS("/widget/loginbox/css/basic.css");
?>

<?php if(!$_SESSION['is_logged']):?>
	<div class="login_box">
		<form id="simple_outlogin" name="simple_outlogin" method="post" action="" autocomplete="off" role="form" class="form" onsubmit="return simple_outlogin_form(this);">
		<input type="hidden" name="url" value="">
			<div class="login-box">
				<div class="login-cell">
					<input type="text" name="mb_id" id="mb_id" class="form_login input-sm" required="" placeholder="아이디" tabindex="21">
					<input type="password" name="mb_password" id="mb_password" class="form_login input-sm no-top-border" required="" placeholder="비밀번호" tabindex="22">
				</div>
				<div class="login-cell login-btn" tabindex="23" onclick="javascript:member_login()" >
					로그인                      
				</div>	
			</div>
			<div class="login-misc font-12 text-muted ellipsis">
				<div class="pull-left">
					<label><input type="checkbox" name="auto_login" value="1" id="remember_me" class="remember-me"> 자동로그인</label>
				</div>
				<div class="pull-right text-muted">
					<a href="<?php echo str::getUrl(__MODULEID,'member','act','dispMemberNaverLogin');?>"><span class="text-muted">네이버 로그인</span></a>
					<span class="bar">|</span>
					<a href="<?php echo str::getUrl(__MODULEID,'member','act','dispMemberSignin');?>"><span class="text-muted">회원가입</span></a>
					<span class="bar">|</span>
					<a href="" class="win_password_lost"><span class="text-muted">정보찾기</span></a>
				</div>
				<div class="clearfix"></div>
			</div>
		</form>
	</div>
<?php else:?>
	<div class="login_box">
		<div class="login_box_success">
			<div class="login_info">
				<a href="<?php echo str::getUrl(__MODULEID, 'member', 'act', 'dispMemberInfo');?>">
					<img class="user_ico" src="common\assets\img\user.png"/>
				</a>
				<div style="font-size: 12px;">
					<span><strong><?php echo $_SESSION['logged_info']['nickname']; ?></strong> 님</span><br/>
					<span>포인트 0 점</span>
				</div>
			</div>
		</div>
	</div>
<?php endif;?>