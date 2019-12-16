<!DOCTYPE html>
<html>

<head>
    <title>ADAND OMS</title>
    <meta charset="utf-8">

    <link href="../css/style.css" rel="stylesheet">
    <link href="../css/account-box.css" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="https://kit.fontawesome.com/799568d786.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Manjari|Noto+Sans+KR&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
    <script src="../js/main.js"></script>

</head>
<body>
<div id="app">

    <div id="top">
        <div class="nav-container">
            <div class="user-container">

                <div class="channel-box active">
                    <div class="user-box">
                        <div class="avatar">
                            <img class="good">
                        </div>
                        <div class="user">
                            <span>ADMINISTRATOR</span>
                            <span class="active"><i class="fas fa-user-circle"></i></span>
                            <span class="dot none"><i class="fas fa-circle"></i></span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="logo-top">
                <img src="../img/logomini.png"> <!-- 클릭 > reflesh -->
            </div>
            <div class="user-setting">
                <!-- 클릭 > "LOGOUT 할까요?" > LOGGOUT -->
                <div class="set-box">
                    <div class="i-box">
                        <i class="fas fa-power-off"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="below-top">

        <div id="aside">
            <aside>
                <div class="aside-box active">
                    <i class="fas fa-user-circle"></i>
                    <span>USER</span>
                </div>
                <div class="aside-box">
                    <a href="./channel.html">
                    <i class="fas fa-globe"></i>
                    <span>CHANNEL</span>
                    </a>
                </div>
            </aside>
        </div>

        <div id="main">
            <main>
                <!-- event -->
                <div class="main-top">

                    <div class="title-box">
                        <span>USER</span>
                    </div>

                </div>

                <div class="main-body">

                    <div class="main-left">
                        <div class="option-box">

                            <div class="option-header active">
                                <div class="option-header-box">
                                    <div class="option-title">
                                        <span>FILTER</span>
                                    </div>
                                </div>
                            </div>

                            <div class="option-body">

                                <div class="option-element">
                                    <span>종류</span>
                                    <select class="tocar">
                                        <option value="0" selected>ALL</option>
                                        <option value="1">AGENCY</option>
                                        <option value="2">OWNER</option>
                                        <option value="3">MK</option>
                                    </select>
                                </div>

                                <div class="option-element">
                                    <span>시작일</span>
                                    <input class="tocar" id="datepicker_start">
                                </div>

                                <div class="option-element">
                                    <span>종료일</span>
                                    <input class="tocar" id="datepicker_end">
                                </div>
                                <div class="option-element">
                                    <span>검색어</span>
                                    <input type="text" class="tocar">
                                </div>

                            </div>

                            <div class="option-footer">
                                <div class="option-footer-box">
                                    <button class="option-btn tocar apply">적용</button>
                                    <button class="option-btn tocar reset">RESET</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="main-center">

                        <div class="account-box">

                            <div class="account-header">

                                <div class="account-header-box">
                                    <div class="header-element">
                                        <a href="#"><span class="all"><i class="far fa-circle"></i></span></a>
                                    </div>
                                    <div class="header-element">
                                        <a href="#"><span class="default"><i class="fas fa-circle"></i></span></a>
                                    </div>
                                    <div class="header-element">
                                        <a href="#"><span class="error"><i class="fas fa-circle"></i></span></a>
                                    </div>
                                </div>

                                <div class="mod-box">
                                    <div class="mod-plus">
                                        <i class="fas fa-plus-circle"></i>
                                    </div>
                                </div>


                            </div>

                            <div class="account-body">

                                <!-- account start -->
                                <div class="account-element">

                                    <!-- summary -->
                                    <div class="account-summary">

                                        <div class="element-header">

                                            <div class="ev-stat default active">
                                                <i class="fas fa-check-circle"></i><span>ACTIVE</span>
                                            </div>

                                            <div class="ev-stat error">
                                                <i class="fas fa-exclamation-circle"></i><span>INACTIVE</span>
                                            </div>

                                            <div class="ev-chname">
                                                <span>AGENCY</span>
                                            </div>

                                        </div>

                                        <div class="element-body">

                                            <div class="data-row1">
                                                <span class="ev-name">
                                                    <input class="tocar" value="김태경"></span>
                                                <span class="ev-id"><input class="tocar" value="tekiteki"></span>
                                                <span class="ev-pw"><input class="tocar" value="kim31010!"></span>
                                            </div>

                                            <div class="data-row2">
                                                <span class="ev-date">2019-08-30</span>
                                            </div>

                                        </div>

                                        <div class="element-footer">

                                                <div class="ev-result">

                                                    <div class="ev-result-stat">

                                                        <div class="ev-result-title">
                                                            <div class="title-btn btn-new">
                                                                <span>AGENCY</span>
                                                            </div>
                                                            <div class="title-btn btn-wrong">
                                                                <span>OWNER</span>
                                                            </div>
                                                            <div class="title-btn btn-chance">
                                                                <span>MK</span>
                                                            </div>
                                                            <div class="btn-dump active">
                                                                <select class="tocar">
                                                                    <option value="1">AGENCY</option>
                                                                    <option value="2">OWNER</option>
                                                                    <option value="3">MK</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="expand-collapse">
                                                    <i class="fa fa-chevron-down rotate"></i>
                                                </div>

                                            </div>

                                        <div class="element-tail">
                                            <div class="tail-box">
                                                <div class="item ev-result-result">
                                                    <div class="itembtn">
                                                        <div class="statbtn rr-stat off active">
                                                            <i class="fas fa-ban"></i><br>
                                                            <span>취소</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item ev-accord">
                                                    <div class="itembtn">
                                                        <div class="statbtn ac-stat back active">
                                                            <i class="fas fa-exclamation-circle"></i><br>
                                                            <span>저장</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                                <!-- order END -->
                                <div class="account-pagination">
                                    <div class="newer">
                                        <i class="fa fa-chevron-left"></i>
                                        <span>NEWER</span>
                                    </div>
                                    <div class="older">
                                        <span>OLDER</span>
                                        <i class="fa fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="stickey">

                    <div class="filter none">
                        <span>FILTER</span>
                    </div>

                </div>
            </main>
        </div>

    </div>

</div>
</body>
</html>