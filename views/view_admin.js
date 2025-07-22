
<%- include("header") %>


        // <!-- ============================================================== -->
        <div class="page-wrapper">
            {/* <!-- ============================================================== --> */}
            {/* <!-- Bread crumb and right sidebar toggle --> */}
            {/* <!-- ============================================================== --> */}
            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-12 d-flex no-block align-items-center">
                        <h4 class="page-title">Tables</h4>
                        <div class="ml-auto text-right">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            {/* <!-- End Bread crumb and right sidebar toggle --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- ============================================================== --> */}
            {/* <!-- Container fluid  --> */}
            {/* <!-- ============================================================== --> */}
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title m-b-0">Static Table</h5>
                            </div>
                            <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col" class="font-weight-bold">No</th>
                                      <th scope="col" class="font-weight-bold">Name</th>
                                      <th scope="col" class="font-weight-bold">Email</th>
                                      <th scope="col" class="font-weight-bold">Password</th>
                                      <th scope="col" class="font-weight-bold">Phone</th>
                                      <th scope="col" class="font-weight-bold">Gender</th>
                                      <th scope="col" class="font-weight-bold">City</th>
                                      <th scope="col" class="font-weight-bold">Hobbies</th>
                                      <th scope="col" class="font-weight-bold">Avatar</th>
                                      <th scope="col" class="font-weight-bold">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* <% data.map((ele, index) => { %> */}
                                      <tr>
                                        <td scope="col"><%= index+1 %></td>
                                        <td scope="col"><%= ele.name %></td>
                                        <td scope="col"><%= ele.email %></td>
                                        <td scope="col"><%= ele.password%></td>
                                        <td scope="col"><%= ele.phone %></td>
                                        <td scope="col"><%= ele.gender %></td>
                                        <td scope="col"><%= ele.card %></td>
                                        <td scope="col"><%= ele.hobbies.join(",")%></td>
                                        <td scope="col">
                                          <img src="<%= ele.avatar %>" width="100px" />
                                        </td>
                                        <td scope="col">
                                          <a class="mr-4" href="/edit_admin?userId=<%= ele.id %>">
                                            <i class=" fas fa-pencil-alt font-20"></i>
                                          </a>
                                          <a class="mr-4">
                                            <i class="fas fa-trash-alt font-20"></i>
                                          </a>
                                        </td>
                                      </tr>
                                    {/* <% })%> */}
                                  </tbody>
                            </table>
                        </div>
                      
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->


<%- include("footer") %></div>