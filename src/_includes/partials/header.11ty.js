module.exports = function (data) {
  return /*html*/ `
  <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            Bootstrap
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
            aria-controls="#offcanvas" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="#offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-between">
                    <li class="nav-item d-md-none"><a class="nav-link" href="#">
                        <img src="/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                        </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Tour</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Product</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Enterprise</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">
                        <img src="/images/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
`;
};
