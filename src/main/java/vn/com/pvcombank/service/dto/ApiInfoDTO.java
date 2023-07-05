package vn.com.pvcombank.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DTO for the {@link vn.com.pvcombank.domain.ApiInfo} entity.
 */
public class ApiInfoDTO implements Serializable {

    private Long id;

    private String name;

    private String path;

    private String requestExample;

    private String responseExample;

    private LocalDate dateCreate;

    private String description;

    private String method;

    private ApplicationDTO application;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getRequestExample() {
        return requestExample;
    }

    public void setRequestExample(String requestExample) {
        this.requestExample = requestExample;
    }

    public String getResponseExample() {
        return responseExample;
    }

    public void setResponseExample(String responseExample) {
        this.responseExample = responseExample;
    }

    public LocalDate getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(LocalDate dateCreate) {
        this.dateCreate = dateCreate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ApplicationDTO getApplication() {
        return application;
    }

    public void setApplication(ApplicationDTO application) {
        this.application = application;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ApiInfoDTO)) {
            return false;
        }

        ApiInfoDTO apiInfoDTO = (ApiInfoDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, apiInfoDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ApiInfoDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", path='" + getPath() + "'" +
            ", requestExample='" + getRequestExample() + "'" +
            ", responseExample='" + getResponseExample() + "'" +
            ", dateCreate='" + getDateCreate() + "'" +
            ", description='" + getDescription() + "'" +
            ", application=" + getApplication() +
            "}";
    }
}
