<nav class="navbar navbar-expand-md navbar-dark bg-dark text-white bg-dark shadow-sm">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">
            Stars Poker
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                <li @if($current == 'usuario') class="nav-item active" @else class="nav-item" @endif>
                    <a class="nav-link" href="/usuario">Usuário</a>
                </li>
                <li @if($current == 'empresa') class="nav-item active" @else class="nav-item" @endif>
                    <a class="nav-link" href="/empresa">Empresa</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
