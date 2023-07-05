package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class HumansMapperTest {

    private HumansMapper humansMapper;

    @BeforeEach
    public void setUp() {
        humansMapper = new HumansMapperImpl();
    }
}
