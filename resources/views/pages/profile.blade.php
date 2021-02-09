{{-- @extends('layouts.app') --}}
@extends('layouts.master')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <ul class="list-groups">
                        <li class="list-group-item"><label>Name : </label> {{ $user->name}}</li>
                        <li class="list-group-item"><label>Email : </label> {{ $user->email}}</li>
                        <li class="list-group-item"><label>User Role : </label> {{ $user->user_role}}</li>
                    </ul>
                    {{ __('This is profile page') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection