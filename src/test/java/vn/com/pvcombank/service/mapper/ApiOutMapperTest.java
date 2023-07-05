package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ApiOutMapperTest {

    private ApiOutMapper apiOutMapper;

    @BeforeEach
    public void setUp() {
        apiOutMapper = new ApiOutMapperImpl();
    }
}
