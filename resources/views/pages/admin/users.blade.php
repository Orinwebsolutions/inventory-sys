@extends('layouts.master')

@section('title')
    <h1 class="h2">Users</h1>
@endsection

@section('content')
@foreach ($users as $user)
    <div class="card mt-3">
        <div class="card-body">
            <div class="row">
                <div class="col">
                  <label for="name">Name : {{$user->name}}</label><br/>
                  <label for="email">Email : {{$user->email}}</label>
                </div>
                <div class="col">
                    <form action="/users/{{$user->id}}" method="post">
                        {{ csrf_field() }}
                        @method('patch')
                        <label for="role">User Role :</label>
                        <select class="custom-select" name="user_role" id="user_role">
                            <option value="">Select user role</option>
                            <option value="admin" 
                            @if ($user->user_role == 'admin')
                                {{'selected="selected"'}}
                            @endif
                            >Admin</option>
                            <option value="staff"
                            @if ($user->user_role == 'staff')
                                {{'selected="selected"'}}
                            @endif
                            >Staff</option>
                        </select>
                        <button class="btn btn-primary mt-2" type="submit">Save role</button>
                    </form>
                </div>
              </div>
        </div>
    </div>
@endforeach
@endsection