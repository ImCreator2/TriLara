@if(!isset($item['children']))
    <li class="{{ ('/'.Route::current()->uri() == $item['url']) ? 'active' : '' }}">
        {{-- dump(url()->current()) --}}
        <a href="{{ $item['url'] }}">
            <i class="fa {{$item['icon']}}"></i>
            <span>{{$item['name']}}</span>
        </a>
    </li>
@else
    <li class="treeview {{ ('/'.Route::current()->uri() == $item['url']) ? 'active' : '' }}">
        <a href="#">
            <i class="fa {{$item['icon']}}"></i>
            <span>{{$item['name']}}</span>
            <i class="fa fa-angle-left pull-right"></i>
        </a>
        <ul class="treeview-menu">
            @foreach($item['children'] as $item)
                @include('adminlte::layouts.partials.menu', $item)
            @endforeach
        </ul>
    </li>
@endif