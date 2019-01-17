<!DOCTYPE html>
<html lang="en">

@section('htmlheader')
    @include('admin.layouts.partials.htmlheader')
@show

<body class="hold-transition sidebar-mini">
<div id="app" class="wrapper">

    @include('admin.layouts.partials.mainheader')

    @include('admin.layouts.partials.sidebar')

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        @include('admin.layouts.partials.contentheader')

        <!-- Main content -->
        <section class="content">
            <!-- Your Page Content Here -->
            @yield('main-content')
        </section><!-- /.content -->
    </div><!-- /.content-wrapper -->

    @include('admin.layouts.partials.controlsidebar')

    @include('admin.layouts.partials.footer')

</div><!-- ./wrapper -->

@section('scripts')
    @include('admin.layouts.partials.scripts')
@show

</body>
</html>
